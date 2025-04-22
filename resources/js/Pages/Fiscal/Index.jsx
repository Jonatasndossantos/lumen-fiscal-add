import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { route } from 'ziggy-js';
import { Head } from '@inertiajs/react';
import { Plus} from 'lucide-react'

export default function Fiscal() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Fiscal
                </h2>
            }
        >
            <Head title="Fiscal" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="container mx-auto px-4 py-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-2xl font-bold text-gray-800">Gerenciar</h1>
                                    <a href={ route('fiscal.create') } 
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition flex items-center space-x-2">
                                        <Plus className="w-4 h-4"/>
                                        <span>Novo Arquivo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
