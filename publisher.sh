[[ $# != 1 ]] && \
    echo -e "\033[0;31mOooops!" && \
    echo "Você precisa informar o caminho SSH do seu repositório pessoal" && \
    exit 1

echo -e "\033[0;32m* * * * * * * * * * * * * * * * * *\033[0m\n"
echo    "Boas-vindas ao script de "
echo -e "publicação de projetos da \033[0;32mTrybe\033[0m\n"
echo -e "\033[0;32m* * * * * * * * * * * * * * * * * *\033[0m\n"

echo -e "\033[0;31mEsse script apaga TODO o histórico"
echo "local dos arquivos e pastas usados"
echo "internamente pela Trybe."
echo 
echo "Você pode consultar esses arquivos "
echo -e "e pastas no comando \033[0;33mgit filter-repo\033[0m \033[0;31m"
echo -e "do arquivo \033[0;32m'./trybe-filter-repo.sh'\033[0m"
echo
read -p "Deseja prosseguir? (N/s)" -n 1 -r
echo 
echo "- - - - - - - - - - - - - - - - - -"

[[ ! $REPLY =~ ^[Ss]$ ]] && echo "Entendido! Nada será feito :)" && exit 1

echo -e "\033[0;31m"
echo "NÃO RECOMENDAMOS utilizar esse"
echo "script ANTES de receber a aprovação"
echo "no projeto."
echo 
echo "Esse script irá fazer um push da"
echo "branch:"
echo 
echo -e "\033[0;33m$(git rev-parse --abbrev-ref HEAD)\033[0m \033[0;31m"
echo 
echo -e "ao seguinte repositório:\033[0m"
echo
echo -e "\033[0;36m$1 \033[0m"
echo
read -p "Tem certeza que deseja prosseguir? (N/s)" -n 1 -r
echo
echo "- - - - - - - - - - - - - - - - - -"

[[ ! $REPLY =~ ^[Ss]$ ]] && echo "Entendido! Nada será feito :)" && exit 1


if bash trybe-filter-repo.sh trybe-security-parameter ; then
    echo -e "\033[0;32m"
    echo "Arquivos limpos com sucesso!"
    echo -e "\033[0m" 
else
    echo -e "\033[0;31m"
    echo -e "Oooops! Houve algum problema no \033[0;32m'./trybe-filter-repo.sh'\033[0m"
    echo "A operação de Push não foi realizada."
    echo -e "\033[0m" 
    exit 1
fi

git remote remove personal-remote &> /dev/null
git remote add personal-remote $1
echo "# 🚧 README em construção 🚧

<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->" > README.md

git add README.md
git commit -m "README inicial, em construção"

if git push personal-remote $(git rev-parse --abbrev-ref HEAD):main ; then
    echo -e "\033[0;32m"
    echo "Push feito com sucesso!"
    echo -e "\033[0m" 
else
    echo -e "\033[0;31m"
    echo "Oooops! Houve algum problema no Push ao seu remote pessoal"
    echo -e "\033[0m" 
    exit 1
fi

echo -e "\033[0;32m* * * * * * * * * * * * * * * * * *\033[0m"
echo -e "Pronto, seu projeto feito na \033[0;32mTrybe\033[0m"
echo "está no seu respositório pessoal!"
echo 
echo -e "Não se esqueça de editar o \033[0;34mREADME\033[0m"
echo "usando nossas recomendações ;)"
echo -e "\033[0;32m* * * * * * * * * * * * * * * * * *\033[0m"
