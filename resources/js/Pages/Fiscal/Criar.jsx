import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react'
import IdentificacaoFiscal from './components/IdentificacaoFiscal';
import DadosInspecao from './components/DadosInspecao';
import ListaVerificacao from './components/ListaVerificacao';
import AlertaIA from './components/AlertaIA';
import AcoesRapidas from './components/AcoesRapidas';

function Criar() {
    const [frequenciaInspecao, definirFrequenciaInspecao] = useState('')
    const [listaVerificacao, setListaVerificacao] = useState({
        treinado: false,
        seguranca: false,
        registros: false,
    })
    const [arquivos, setArquivos] = useState({
        designacao: [],
        plano: [],
        fotos: [],
    })
    const [mostrarPainelIA, definirMostrarPainelIA] = useState(true)

    useEffect(() => {
        if (mostrarPainelIA) {
            const timer = setTimeout(() => {
                definirMostrarPainelIA(false)
            }, 10000)
            return () => clearTimeout(timer)
        }
    }, [mostrarPainelIA])

    const manipularMudancaVerificacao = (campo) => {
        setListaVerificacao(prev => ({ ...prev, [campo]: !prev[campo] }))
    }

    const manipularMudancaArquivo = function (e, tipo) {
        if (e.target.files) {
            setArquivos(prev => ({
                ...prev,
                [tipo]: Array.from(e.target.files || []),
            }))
        }
    }

    const removerArquivo = (tipo, indice) => {
        setArquivos(prev => ({
            ...prev,
            [tipo]: prev[tipo].filter((_, i) => i !== indice),
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
                            <IdentificacaoFiscal
                                arquivos={arquivos}
                                manipularMudancaArquivo={manipularMudancaArquivo}
                                removerArquivo={removerArquivo}
                            />
                            <DadosInspecao
                                frequenciaInspecao={frequenciaInspecao}
                                definirFrequenciaInspecao={definirFrequenciaInspecao}
                                arquivos={arquivos}
                                manipularMudancaArquivo={manipularMudancaArquivo}
                                removerArquivo={removerArquivo}
                            />
                            <ListaVerificacao
                                listaVerificacao={listaVerificacao}
                                manipularMudancaVerificacao={manipularMudancaVerificacao}
                            />
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-8 space-y-6">
                                <AlertaIA
                                    mostrarPainelIA={mostrarPainelIA}
                                    definirMostrarPainelIA={definirMostrarPainelIA}
                                />
                                <AcoesRapidas />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    )
}

export default Criar