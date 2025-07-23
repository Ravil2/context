import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { data } from '../data'

export default function ContextPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      {data.sections.map((section, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-violet-400">
            {section.title}
          </h2>

          {section.content && (
            <p className="mb-4 text-lg leading-relaxed">{section.content}</p>
          )}

          {section.codeExamples && (
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              {section.codeExamples.map((example, idx) => (
                <div key={idx}>
                  {example.description && (
                    <p className="mb-2 text-sm opacity-80">
                      {example.description}
                    </p>
                  )}
                  <SyntaxHighlighter language="javascript" style={duotoneDark}>
                    {example.code}
                  </SyntaxHighlighter>
                </div>
              ))}
            </div>
          )}

          {section.code && (
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <SyntaxHighlighter language="javascript" style={duotoneDark}>
                {section.code}
              </SyntaxHighlighter>
            </div>
          )}

          {section.useCases && (
            <ul className="list-disc pl-6 space-y-2 text-lg">
              {section.useCases.map((useCase, i) => (
                <li key={i}>{useCase}</li>
              ))}
            </ul>
          )}

          {section.steps && (
            <div>
              {section.steps.map((step, stepIdx) => (
                <div key={stepIdx} className="mb-6">
                  <h3 className="text-xl font-medium mb-3 text-violet-400">
                    {step.title}
                  </h3>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <SyntaxHighlighter
                      language="javascript"
                      style={duotoneDark}
                    >
                      {step.code}
                    </SyntaxHighlighter>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
