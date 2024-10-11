export const checklistItems = [
    {
        category: "Verificação de Bugs:",
        items: [
            {
                text: "Todos os bugs conhecidos foram corrigidos?",
                description: "Verifique se todos os problemas previamente identificados foram resolvidos para evitar que impactem os usuários."
            },
            {
                text: "O código foi testado para garantir que novos bugs não foram introduzidos?",
                description: "Realize testes para confirmar que as novas alterações não causaram falhas em funcionalidades existentes."
            }
        ]
    },
    {
        category: "Responsividade:",
        items: [
            {
                text: "O design foi testado em diferentes dispositivos (desktop, tablet, mobile)?",
                description: "Assegure que a interface funcione corretamente em diferentes tamanhos de tela e resoluções."
            },
            {
                text: "O layout se adapta corretamente a diferentes tamanhos de tela?",
                description: "Verifique se o layout se ajusta adequadamente e se a experiência do usuário permanece consistente."
            }
        ]
    },
    {
        category: "Acessibilidade:",
        items: [
            {
                text: "As diretrizes de acessibilidade (WCAG) foram seguidas?",
                description: "Garanta que o site seja utilizável por pessoas com deficiência, seguindo normas de acessibilidade."
            },
            {
                text: "Foram utilizados atributos 'alt' para imagens?",
                description: "Atributos `alt` fornecem descrições de imagens para leitores de tela, melhorando a acessibilidade."
            },
            {
                text: "O contraste das cores é adequado para legibilidade?",
                description: "Verifique se as cores usadas proporcionam um bom contraste, facilitando a leitura do conteúdo."
            }
        ]
    },
    {
        category: "Performance:",
        items: [
            {
                text: "As imagens estão otimizadas?",
                description: "Imagens otimizadas ajudam a reduzir o tempo de carregamento e melhoram a experiência do usuário."
            },
            {
                text: "O código foi minificado (CSS/JS)?",
                description: "Minificar arquivos reduz seu tamanho, melhorando a performance de carregamento da página."
            },
            {
                text: "O carregamento de recursos está otimizado (lazy loading, se necessário)?",
                description: "Implementar lazy loading carrega apenas os recursos quando necessários, aumentando a eficiência."
            }
        ]
    },
    {
        category: "Compatibilidade de Navegadores:",
        items: [
            {
                text: "O site foi testado em navegadores diferentes (Chrome, Firefox, Safari, etc.)?",
                description: "Assegure que a aplicação funcione de maneira consistente em todos os navegadores mais populares."
            },
            {
                text: "Funcionalidades específicas do navegador foram consideradas?",
                description: "Verifique se há códigos ou funcionalidades que podem não ser suportados em todos os navegadores."
            }
        ]
    },
    {
        category: "Código Limpo e Organizado:",
        items: [
            {
                text: "O código foi revisado para remoção de código não utilizado?",
                description: "Remova código desnecessário para manter a base de código limpa e fácil de manter."
            },
            {
                text: "As funções e variáveis estão bem nomeadas?",
                description: "Nomes claros ajudam outros desenvolvedores a entender rapidamente o propósito do código."
            },
            {
                text: "Comentários foram adicionados quando necessário?",
                description: "Comentários úteis explicam partes complexas do código, facilitando futuras manutenções."
            }
        ]
    },
    {
        category: "Controle de Versão:",
        items: [
            {
                text: "Os commits foram feitos de forma clara e descritiva?",
                description: "Mensagens de commit claras ajudam na compreensão das mudanças feitas e no histórico do projeto."
            },
            {
                text: "O branch foi revisado antes de ser mesclado (merge)?",
                description: "Revise o código de um branch antes de integrá-lo à base principal para garantir sua qualidade."
            }
        ]
    },
    {
        category: "Testes:",
        items: [
            {
                text: "Testes unitários foram escritos e executados?",
                description: "Testes unitários garantem que componentes individuais funcionem corretamente."
            },
            {
                text: "Testes de integração foram realizados?",
                description: "Testes de integração verificam se diferentes partes do sistema trabalham juntas corretamente."
            }
        ]
    },
    {
        category: "Documentação:",
        items: [
            {
                text: "A documentação do código foi atualizada, se necessário?",
                description: "Manter a documentação em dia ajuda outros desenvolvedores a entender e usar seu código."
            },
            {
                text: "As alterações significativas foram documentadas para a equipe?",
                description: "Documentar mudanças importantes garante que a equipe esteja ciente das atualizações e suas implicações."
            }
        ]
    },
    {
        category: "Revisão de Código:",
        items: [
            {
                text: "O código foi revisado por pelo menos um colega (pull request)?",
                description: "Revisões por pares ajudam a identificar problemas e promovem melhores práticas de codificação."
            },
            {
                text: "Feedback recebido foi considerado e implementado?",
                description: "Responder ao feedback melhora a qualidade do código e promove a colaboração."
            }
        ]
    },
    {
        category: "Backup e Versionamento:",
        items: [
            {
                text: "Um backup do código atual foi feito antes do deployment?",
                description: "Fazer backup previne perda de dados e facilita a recuperação em caso de problemas."
            },
            {
                text: "O versionamento (tags) está em dia?",
                description: "Usar tags corretamente ajuda a identificar versões estáveis do código."
            }
        ]
    },
    {
        category: "Configuração de Ambiente:",
        items: [
            {
                text: "As variáveis de ambiente estão configuradas corretamente?",
                description: "Variáveis de ambiente adequadas garantem que a aplicação funcione corretamente em diferentes ambientes."
            },
            {
                text: "Configurações de produção foram verificadas (como endpoints de API)?",
                description: "Verificar configurações garante que a aplicação se conecte corretamente a serviços externos."
            }
        ]
    },
    {
        category: "Conclusão:",
        items: [
            {
                text: "Tudo foi verificado e está pronto para produção?",
                description: "Uma última verificação para garantir que todas as etapas foram concluídas e a aplicação está pronta para ser lançada."
            }
        ]
    }
];
