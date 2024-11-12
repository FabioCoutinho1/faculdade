from PIL import Image
import os   

# Caminho para a pasta com as imagens
folder_path = 'img'

# Novo diretório para as imagens com qualidade reduzida
output_folder = 'reduzidas'

# Cria a pasta de saída caso não exista
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Função para reduzir a qualidade da imagem
def reduzir_qualidade(imagem_path, output_path, qualidade=50):
    try:
        img = Image.open(imagem_path)
        img.save(output_path, quality=qualidade, optimize=True)
        print(f"Imagem {imagem_path} processada e salva em {output_path}")
    except Exception as e:
        print(f"Erro ao processar {imagem_path}: {e}")

# Verificando todas as imagens na pasta
print(f"Processando imagens na pasta: {folder_path}")
for filename in os.listdir(folder_path):
    # Verifica se a extensão é uma das imagens válidas (JPG, JPEG, PNG)
    if filename.lower().endswith(('jpg', 'jpeg', 'png')):
        image_path = os.path.join(folder_path, filename)
        
        # Define o caminho de saída para a imagem
        output_path = os.path.join(output_folder, filename)

        print(f"Processando {image_path}...")  # Print para debug
        
        # Reduz a qualidade e salva
        reduzir_qualidade(image_path, output_path, qualidade=50)

print("Processamento completo.")
