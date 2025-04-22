import React from 'react'
import { ClipboardCheck, FileText, Image, Upload, X } from 'lucide-react'

const DadosInspecao = ({ frequenciaInspecao, definirFrequenciaInspecao, arquivos, manipularMudancaArquivo, removerArquivo }) => {
    return (
        <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2 mb-6">
                <ClipboardCheck className="w-5 h-5 text-blue-600" />
                Dados de inspeção
            </h2>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="frequencia" className="block text-sm font-medium text-gray-700">
                            Frequência de inspeção
                        </label>
                        <select
                            id="frequencia"
                            value={frequenciaInspecao}
                            onChange={(e) => definirFrequenciaInspecao(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        >
                            <option value="">Selecione a frequência</option>
                            <option value="diaria">Diária</option>
                            <option value="semanal">Semanal</option>
                            <option value="quinzenal">Quinzenal</option>
                            <option value="mensal">Mensal</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Plano de inspeção
                        </label>
                        <div className="mt-1">
                            <label className="relative flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                                <FileText className="w-5 h-5 text-gray-400 mr-2" />
                                <span className="text-sm text-gray-600">Plano de upload</span>
                                <input
                                    type="file"
                                    className="sr-only"
                                    onChange={(e) => manipularMudancaArquivo(e, 'plano')}
                                />
                            </label>
                            {arquivos.plano.length > 0 && (
                                <div className="mt-2">
                                    {arquivos.plano.map((arquivo, indice) => (
                                        <div key={indice} className="flex items-center justify-between py-1">
                                            <span className="text-sm text-gray-600 truncate">{arquivo.name}</span>
                                            <button
                                                onClick={() => removerArquivo('plano', indice)}
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

                <div>
                    <label htmlFor="relatorio" className="block text-sm font-medium text-gray-700">
                        Relatório técnico
                    </label>
                    <textarea
                        id="relatorio"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Insira os detalhes do relatório técnico"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Registros fotográficos
                    </label>
                    <div className="mt-1">
                        <label className="relative flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                            <Image className="w-5 h-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-600">Carregar fotos</span>
                            <input
                                type="file"
                                multiple
                                className="sr-only"
                                onChange={(e) => manipularMudancaArquivo(e, 'fotos')}
                            />
                        </label>
                        {arquivos.fotos.length > 0 && (
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {arquivos.fotos.map((arquivo, indice) => (
                                    <div key={indice} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                                        <span className="text-sm text-gray-600 truncate">{arquivo.name}</span>
                                        <button
                                            onClick={() => removerArquivo('fotos', indice)}
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

export default DadosInspecao 