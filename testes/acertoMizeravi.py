from random import choice

digitos       = ['0','1','2','3','4','5','6','7','8','9']
operacoes     = ['+','-','*']

# choice: escolha apenas 1 dentre a lista
operacao = choice(operacoes)
numero_1 = choice(digitos)
numero_2 = choice(digitos)


chute = input(f"Quanto é {numero_1} {operacao} {numero_2}?\nResposta: ")


resultado = eval(f"{numero_1}{operacao}{numero_2}")

# Comparação Resultado com Chute
if int(chute) == resultado:
    print("Acertou! Mizerávi 👏👏👏")
else:
    print(f"A resposta correta é: {resultado}")
