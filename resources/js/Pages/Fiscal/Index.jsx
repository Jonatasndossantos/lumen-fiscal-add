import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { route } from 'ziggy-js';
import { Head } from '@inertiajs/react';

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
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex justify-beetwen">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        <a
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"

                            href={route('fiscal.create')}
                        >
                            Criar
                        
                        </a>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
