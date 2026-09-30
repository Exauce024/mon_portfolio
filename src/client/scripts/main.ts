import { PROJECTS_DATA, ClientProject } from './projectsData.js';
import { showToast } from './toast.js';

// DOM Elements & Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProjectsFilter();
  initContactActions();
  initMobileMenu();
  initModalListeners();
});

/* -------------------------------------------------------------------------- */
/* 1. Theme Switcher (Dark Mode & Light Mode)                                */
/* -------------------------------------------------------------------------- */
function initTheme(): void {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply initial theme
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      showToast(
        isDark ? 'Mode sombre activé 🌙' : 'Mode clair activé ☀️',
        'info'
      );
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 2. Contact Hub & Quick Link Actions                                        */
/* -------------------------------------------------------------------------- */
function initContactActions(): void {
  // Copy Email Button
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'exaucebanza@gmail.com';
      
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email (${email}) copié dans le presse-papier !`, 'success');
      }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Email (${email}) copié !`, 'success');
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 3. Dynamic Projects Filtering & Modal Handling                            */
/* -------------------------------------------------------------------------- */
function initProjectsFilter(): void {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.getElementById('projects-grid');

  if (!projectsGrid) return;

  // Render projects
  renderProjects('all');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('bg-cyan-600', 'text-white', 'shadow-lg', 'shadow-cyan-500/25');
        b.classList.add('bg-slate-200/80', 'dark:bg-slate-800/80', 'text-slate-700', 'dark:text-slate-300');
      });

      btn.classList.remove('bg-slate-200/80', 'dark:bg-slate-800/80', 'text-slate-700', 'dark:text-slate-300');
      btn.classList.add('bg-cyan-600', 'text-white', 'shadow-lg', 'shadow-cyan-500/25');

      const category = btn.getAttribute('data-category') || 'all';
      renderProjects(category);
    });
  });
}

function renderProjects(category: string): void {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  const filtered = category === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === category);

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
        <p class="text-lg">Aucun projet disponible dans cette catégorie pour le moment.</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered.map((project) => `
    <article class="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300">
      <!-- Top gradient bar -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

      <div>
        <!-- Title & Subtitle -->
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          ${project.title}
        </h3>
        <p class="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-3">
          ${project.subtitle}
        </p>

        <!-- Description -->
        <p class="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
          ${project.description}
        </p>
      </div>

      <div>
        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${project.technologies.map(tech => `
            <span class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
              ${tech}
            </span>
          `).join('')}
        </div>

        <!-- Actions -->
        <div class="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
          <button 
            data-project-id="${project.id}" 
            class="btn-open-modal inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
          >
            <span>Détails & Architecture</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>

          ${project.githubUrl ? `
            <a 
              href="${project.githubUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Voir le code source GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');

  // Re-attach modal trigger listeners
  document.querySelectorAll('.btn-open-modal').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      if (id) openProjectModal(id);
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 4. Modal Project Detail                                                    */
/* -------------------------------------------------------------------------- */
function initModalListeners(): void {
  const modal = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('modal-close-btn');

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
      }
    });
  }
}

function openProjectModal(id: string): void {
  const project = PROJECTS_DATA.find((p) => p.id === id);
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body-content');

  if (!project || !modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Header -->
    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
        ${project.title}
      </h2>
      <p class="text-cyan-600 dark:text-cyan-400 font-medium">
        ${project.subtitle}
      </p>
    </div>

    <!-- Description -->
    <div class="mb-6">
      <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Présentation détaillée</h4>
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        ${project.longDescription}
      </p>
    </div>

    <!-- Key Metrics if available -->
    ${project.metrics ? `
      <div class="mb-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-lg bg-cyan-500 text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <div>
            <span class="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">Impact & Métriques clés</span>
            <p class="font-bold text-slate-900 dark:text-white text-base">${project.metrics}</p>
          </div>
        </div>
      </div>
    ` : ''}

    <!-- Features -->
    <div class="mb-6">
      <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Fonctionnalités Clés & Modèles</h4>
      <ul class="space-y-2">
        ${project.features.map(f => `
          <li class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
            <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <!-- Architecture Notes -->
    ${project.architectureNotes ? `
      <div class="mb-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Architecture & Conception (SGBD / UML)</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">${project.architectureNotes}</p>
      </div>
    ` : ''}

    <!-- Technologies -->
    <div class="mb-6">
      <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Technologies Utilisées</h4>
      <div class="flex flex-wrap gap-2">
        ${project.technologies.map(t => `
          <span class="px-3 py-1 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
            ${t}
          </span>
        `).join('')}
      </div>
    </div>

    <!-- Footer Links -->
    <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
      ${project.githubUrl ? `
        <a 
          href="${project.githubUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          <span>Voir sur GitHub</span>
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.remove('hidden');
}


/* -------------------------------------------------------------------------- */
/* 6. Mobile Menu Navigation                                                  */
/* -------------------------------------------------------------------------- */
function initMobileMenu(): void {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}
