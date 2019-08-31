module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
};

//preset-env (Altera o javascript par um que o navegador entenda)
//preset-react (Alterar as coisas especificas do react tipo JSX para que o navegador entendenda)
//plugin-proposal-class-properties permite escrever o estado mesmo q esteja fora do constructor