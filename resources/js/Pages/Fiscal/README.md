# Seção Fiscal

Este diretório contém os componentes e páginas relacionados à funcionalidade de gestão fiscal do sistema. A seção fiscal permite o registro, acompanhamento e gerenciamento de inspeções fiscais, incluindo identificação do agente, dados de inspeção, verificação de conformidade e alertas inteligentes.

## Estrutura de Diretórios

```
Fiscal/
├── README.md                  # Este arquivo
├── Create.jsx                 # Página principal para criação de registros fiscais
└── components/                # Componentes reutilizáveis da seção fiscal
    ├── IdentificacaoFiscal.jsx    # Componente para dados de identificação do fiscal
    ├── DadosInspecao.jsx          # Componente para dados da inspeção
    ├── ListaVerificacao.jsx       # Componente para verificação de conformidade
    ├── AlertaIA.jsx               # Componente para alertas gerados por IA
    └── AcoesRapidas.jsx           # Componente para ações rápidas
```

## Componentes

### Create.jsx

Página principal que integra todos os componentes da seção fiscal. Gerencia o estado global e a lógica de interação entre os componentes.

**Funcionalidades:**
- Gerenciamento de estado para frequência de inspeção
- Controle da lista de verificação de conformidade
- Manipulação de arquivos (designação, plano, fotos)
- Controle de exibição do painel de alertas de IA

### IdentificacaoFiscal.jsx

Componente para registro dos dados de identificação do agente fiscal.

**Props:**
- `arquivos`: Objeto contendo os arquivos carregados
- `manipularMudancaArquivo`: Função para lidar com o upload de arquivos
- `removerArquivo`: Função para remover arquivos

**Campos:**
- Nome completo do agente fiscal
- Upload de documento de designação

### DadosInspecao.jsx

Componente para registro dos dados relacionados à inspeção.

**Props:**
- `frequenciaInspecao`: Estado da frequência de inspeção selecionada
- `definirFrequenciaInspecao`: Função para atualizar a frequência
- `arquivos`: Objeto contendo os arquivos carregados
- `manipularMudancaArquivo`: Função para lidar com o upload de arquivos
- `removerArquivo`: Função para remover arquivos

**Campos:**
- Seleção de frequência de inspeção (Diária, Semanal, Quinzenal, Mensal)
- Upload de plano de inspeção
- Campo para relatório técnico
- Upload de registros fotográficos

### ListaVerificacao.jsx

Componente para verificação de conformidade com requisitos legais e procedimentais.

**Props:**
- `listaVerificacao`: Objeto com o estado dos itens verificados
- `manipularMudancaVerificacao`: Função para atualizar o estado dos itens

**Itens verificados:**
- Fiscal treinado (Lei 14.133)
- Equipamentos de segurança utilizados
- Registros digitais e físicos mantidos

### AlertaIA.jsx

Componente para exibição de alertas gerados por inteligência artificial.

**Props:**
- `mostrarPainelIA`: Estado de visibilidade do painel
- `definirMostrarPainelIA`: Função para controlar a visibilidade

**Funcionalidades:**
- Exibição de alertas prioritários
- Temporizador automático para fechar o alerta após 10 segundos
- Indicadores de prioridade e prazo

### AcoesRapidas.jsx

Componente para ações rápidas relacionadas aos registros fiscais.

**Ações disponíveis:**
- Salvar alterações
- Visualização
- Exportar dados

## Fluxo de Dados

1. O componente `Create.jsx` gerencia o estado global da aplicação
2. Os estados são passados como props para os componentes filhos
3. As funções de manipulação de estado são definidas no componente pai e passadas para os filhos
4. Alterações nos componentes filhos são refletidas no estado do componente pai

## Integração com o Backend

Para integrar esta seção com o backend Laravel, será necessário:

1. Criar rotas API para:
   - Salvar registros fiscais
   - Recuperar registros existentes
   - Upload de arquivos
   - Exportação de dados

2. Implementar controladores para:
   - Gerenciar operações CRUD de registros fiscais
   - Processar uploads de arquivos
   - Gerar relatórios e exportações

3. Definir modelos para:
   - Registro fiscal
   - Arquivos anexos
   - Histórico de inspeções

## Próximos Passos

- Implementar validação de formulários
- Adicionar persistência de dados com o backend
- Desenvolver funcionalidade de exportação de dados
- Implementar visualização de registros existentes
- Adicionar funcionalidade de edição de registros
- Desenvolver sistema de notificações para alertas de IA


## Dependências

- React
- Inertia.js
- Tailwind CSS
- Lucide React (para ícones) 