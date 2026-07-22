import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      setTheme: (theme) => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        document.documentElement.classList.toggle('light', theme === 'light')
        set({ theme })
      },
      toggleTheme: () => {
        const next = get().theme === 'dark' ? 'light' : 'dark'
        get().setTheme(next)
      },
    }),
    {
      name: 'berhe-theme',
      onRehydrateStorage: () => (state) => {
        const theme = state?.theme ?? 'dark'
        document.documentElement.classList.toggle('dark', theme === 'dark')
        document.documentElement.classList.toggle('light', theme === 'light')
      },
    },
  ),
)

interface UiState {
  commandOpen: boolean
  setCommandOpen: (open: boolean) => void
  loadingComplete: boolean
  setLoadingComplete: (complete: boolean) => void
  activeSection: string
  setActiveSection: (id: string) => void
}

export const useUiStore = create<UiState>((set) => ({
  commandOpen: false,
  setCommandOpen: (commandOpen) => set({ commandOpen }),
  loadingComplete: false,
  setLoadingComplete: (loadingComplete) => set({ loadingComplete }),
  activeSection: 'hero',
  setActiveSection: (activeSection) => set({ activeSection }),
}))
