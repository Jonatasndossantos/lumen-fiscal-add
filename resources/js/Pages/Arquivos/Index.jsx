import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react'
import {
    AlertTriangle,
    Image,
    CheckCircle2,
    ClipboardCheck,
    FileText,
    Upload,
    User,
    X,
} from 'lucide-react'

function Index() {
    const [inspectionFrequency, setInspectionFrequency] = useState('')
    const [checklist, setChecklist] = useState({
        trained: false,
        safety: false,
        records: false,
    })
    const [files, setFiles] = useState({
        designation: [],
        plan: [],
        photos: [],
    })
    const [showAIPanel, setShowAIPanel] = useState(true)

    useEffect(() => {
        if (showAIPanel) {
            const timer = setTimeout(() => {
                setShowAIPanel(false)
            }, 10000)
            return () => clearTimeout(timer)
        }
    }, [showAIPanel])

    const handleChecklistChange = (field) => {
        setChecklist(prev => ({ ...prev, [field]: !prev[field] }))
    }

    const handleFileChange = function (e, type) {
        if (e.target.files) {
            setFiles(prev => ({
                ...prev,
                [type]: Array.from(e.target.files || []),
            }))
        }
    }

    const removeFile = (type, index) => {
        setFiles(prev => ({
            ...prev,
            [type]: prev[type].filter((_, i) => i !== index),
        }))
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tela Fiscal
                </h2>
            }
        >
            <Head title="Tela Fiscal" />
            <div className="min-h-screen bg-gray-50">

                <main className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            {/* Identificação Fiscal */}
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

                            {/* Dados de inspeção */}
                            <section className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2 mb-6">
                                    <ClipboardCheck className="w-5 h-5 text-blue-600" />
                                    Dados de inspeção
                                </h2>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                                                Frequência de inspeção
                                            </label>
                                            <select
                                                id="frequency"
                                                value={inspectionFrequency}
                                                onChange={(e) => setInspectionFrequency(e.target.value)}
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
                                                        onChange={(e) => handleFileChange(e, 'plan')}
                                                    />
                                                </label>
                                                {files.plan.length > 0 && (
                                                    <div className="mt-2">
                                                        {files.plan.map((file, index) => (
                                                            <div key={index} className="flex items-center justify-between py-1">
                                                                <span className="text-sm text-gray-600 truncate">{file.name}</span>
                                                                <button
                                                                    onClick={() => removeFile('plan', index)}
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
                                        <label htmlFor="report" className="block text-sm font-medium text-gray-700">
                                            Relatório técnico
                                        </label>
                                        <textarea
                                            id="report"
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
                                                    onChange={(e) => handleFileChange(e, 'photos')}
                                                />
                                            </label>
                                            {files.photos.length > 0 && (
                                                <div className="mt-2 grid grid-cols-2 gap-2">
                                                    {files.photos.map((file, index) => (
                                                        <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                                                            <span className="text-sm text-gray-600 truncate">{file.name}</span>
                                                            <button
                                                                onClick={() => removeFile('photos', index)}
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

                            {/* Lista de verificação de conformidade */}
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
                        </div>

                        {/* Coluna da direita - Integração de IA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8 space-y-6">
                                {/*Alerta de IA*/}
                                {showAIPanel && (
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
                                )}
                                {/*Ações rápidas*/}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-sm font-medium text-gray-700 mb-4">Ações rápidas</h2>
                                    <div className="space-y-3">
                                        <button
                                            type="button"
                                            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Salvar alterações
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Visualização
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Exportar dados
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </AuthenticatedLayout>
    )
}

export default Index