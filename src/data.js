export const data = {
  sections: [
    {
      title: '1. Что такое useContext?',
      content:
        'useContext - это хук React, который позволяет получать доступ к значениям контекста без использования Consumer компонентов.',
      codeExamples: [
        {
          description: 'Без useContext',
          code: '<ThemeContext.Consumer>\n  {theme => <div>{theme}</div>}\n</ThemeContext.Consumer>',
        },
        {
          description: 'С useContext',
          code: 'const theme = useContext(ThemeContext)',
        },
      ],
    },
    {
      title: '2. Как использовать',
      steps: [
        {
          title: 'Шаг 1: Создание контекста',
          code: "import { createContext } from 'react';\n\n// Создаем контекст с дефолтным значением\nconst ThemeContext = createContext('light');",
        },
        {
          title: 'Шаг 2: Обеспечение контекста',
          code: "function App() {\n  const [theme, setTheme] = useState('dark');\n  \n  return (\n    <ThemeContext.Provider value={theme}>\n      <Page />\n    </ThemeContext.Provider>\n  );\n}",
        },
        {
          title: 'Шаг 3: Использование контекста',
          code: "import { useContext } from 'react';\n\nfunction Button() {\n  const theme = useContext(ThemeContext);\n  \n  return (\n    <button style={{ \n      background: theme === 'dark' ? '#333' : '#EEE',\n      color: theme === 'dark' ? '#FFF' : '#000'\n    }}>\n      Кнопка с темой\n    </button>\n  );\n}",
        },
      ],
    },
    {
      title: '3. Полный пример с темой',
      code: "// themeContext.js\nimport { createContext, useState, useContext } from 'react';\n\nconst ThemeContext = createContext();\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  \n  const toggleTheme = () => {\n    setTheme(prev => prev === 'light' ? 'dark' : 'light');\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport function useTheme() {\n  return useContext(ThemeContext);\n}\n\n// App.js\nimport { ThemeProvider } from './themeContext';\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <Header />\n      <Content />\n    </ThemeProvider>\n  );\n}\n\n// Header.js\nimport { useTheme } from './themeContext';\n\nfunction Header() {\n  const { theme, toggleTheme } = useTheme();\n  \n  return (\n    <header style={{ background: theme === 'light' ? '#fff' : '#333' }}>\n      <button onClick={toggleTheme}>\n        Переключить тему\n      </button>\n    </header>\n  );\n}",
    },
    {
      title: '4. Когда использовать',
      useCases: [
        'Глобальные настройки (тема, язык)',
        'Данные пользователя (авторизация)',
        'Состояние, используемое во многих компонентах',
        'Когда надоедает передавать пропсы через много уровней',
      ],
    },
    {
      title: '5. Пример на сайте',
      content:
        'На нашем сайте вы можете увидеть использование useContext на примере переключения темы dark/light на ее реализацию мы тоже использовали хук useContext',
    },
  ],
}
