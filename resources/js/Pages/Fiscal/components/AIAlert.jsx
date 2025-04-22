import React from 'react'
import { AlertTriangle, X } from 'lucide-react'

const AIAlert = ({ showAIPanel, setShowAIPanel }) => {
    if (!showAIPanel) return null;

    return (
        <section className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-amber-500">
            <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-800">Alerta de IA</h2>
                        <button
                            onClick={() => setShowAIPanel(false)}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                        A medição do Contrato 005/2025 está atrasada. Favor revisar e atualizar o cronograma de inspeção.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Prioridade: Alta
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Vencimento: 48h
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AIAlert 