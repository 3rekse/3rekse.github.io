# attivare ambiente virtuale: $ source ~/myenv/bin/activate

from translate import Translator

def translate_file(input_file, output_file, from_lang, to_lang):
    translator = Translator(from_lang=from_lang, to_lang=to_lang)
    
    with open(input_file, 'r') as file:
        lines = file.readlines()

    print(f"Traduzione di {len(lines)} righe in corso...")
    
    translated_lines = []
    for i, line in enumerate(lines):
        translated_lines.append(translator.translate(line))
        if (i+1) % 10 == 0:  # Ogni 10 righe, stampa un aggiornamento
            print(f"Tradotte {i+1} righe...", end='\r', flush=True)
    
    print("Scrittura delle righe tradotte nel file di output...")
    with open(output_file, 'w') as file:
        file.writelines(translated_lines)
    
    print("Traduzione completata.")

# Uso della funzione
translate_file('pages/internet/html/tables.md', 'pages/internet/html/tables_it.md', 'en', 'it')