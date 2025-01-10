import { useMemo, useState } from "react";
import { Textarea } from "./components/ui/textarea";
import Footer from "./components/footer";

function App() {
  const [text, setText] = useState<string>("");

  const countJustLettersAndNumbers = (str: string) => {
    return str.replace(/[^a-zA-Z0-9]/g, "").length;
  };

  const countWords = (str: string) => {
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  const countSentences = (str: string) => {
    return (str.match(/[^.!?]*[.!?]/g) || []).length;
  };

  const countParagraphs = (str: string) => {
    return str.split(/\n+/).filter(Boolean).length;
  };

  const countSpaces = (str: string) => {
    return (str.match(/ /g) || []).length;
  };

  const characters = useMemo(() => countJustLettersAndNumbers(text), [text]);
  const words = useMemo(() => countWords(text), [text]);
  const sentences = useMemo(() => countSentences(text), [text]);
  const paragraphs = useMemo(() => countParagraphs(text), [text]);
  const spaces = useMemo(() => countSpaces(text), [text]);

  return (
    <>
      <div className="p-4 min-h-screen">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Conta Letras</h1>
          <Textarea
            placeholder="Digite aqui seu texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={20}
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-center">
          <div>
            <p className="label">Caracteres</p>
            <span>{characters}</span>
          </div>
          <div>
            <p className="label">Palavras</p>
            <span>{words}</span>
          </div>
          <div>
            <p className="label">Sentenças</p>
            <span>{sentences}</span>
          </div>
          <div>
            <p className="label">Paragráfos</p>
            <span>{paragraphs}</span>
          </div>
          <div>
            <p className="label">Espaços</p>
            <span>{spaces}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
