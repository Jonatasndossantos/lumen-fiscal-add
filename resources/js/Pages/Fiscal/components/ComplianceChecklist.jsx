import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const ComplianceChecklist = ({ checklist, handleChecklistChange }) => {
    return (
        <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                Lista de verificação de conformidade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries({
                    trained: 'Fiscal treinado (Lei 14.133)',
                    safety: 'Equipamentos de segurança utilizados',
                    records: 'Registros digitais e físicos mantidos',
                }).map(([key, label]) => (
                    <label key={key} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-md">
                        <input
                            type="checkbox"
                            checked={checklist[key]}
                            onChange={() => handleChecklistChange(key)}
                            className="h-4 w-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{label}</span>
                    </label>
                ))}
            </div>
        </section>
    )
}

export default ComplianceChecklist 