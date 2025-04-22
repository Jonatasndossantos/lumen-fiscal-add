import React from 'react'
import { User, Upload, X } from 'lucide-react'

const FiscalIdentification = ({ files, handleFileChange, removeFile }) => {
    return (
        <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-blue-600" />
                Identificação Fiscal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="fiscalName" className="block text-sm font-medium text-gray-700">
                        Nome completo do agente fiscal
                    </label>
                    <input
                        type="text"
                        id="fiscalName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Digite o nome completo"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Documento de designação
                    </label>
                    <div className="mt-1">
                        <label className="relative flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                            <Upload className="w-5 h-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-600">Escolha o arquivo</span>
                            <input
                                type="file"
                                className="sr-only"
                                onChange={(e) => handleFileChange(e, 'designation')}
                            />
                        </label>
                        {files.designation.length > 0 && (
                            <div className="mt-2">
                                {files.designation.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between py-1">
                                        <span className="text-sm text-gray-600 truncate">{file.name}</span>
                                        <button
                                            onClick={() => removeFile('designation', index)}
                                            className="text-gray-400 hover:text-gray-500"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FiscalIdentification 