import { toDataURL } from "qrcode";
import { useEffect, useState } from "react";

export default function Generator() {
  const [qr, setQr] = useState<string | null>(null);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    toDataURL(text, {
      errorCorrectionLevel: "H",
      width: 270,
      margin: 3,
    }).then((url) => {
      setQr(url);
    });
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-10 gap-10 bg-transparent flex-col md:flex-row">
      <textarea
        className="w-96 h-96 p-6 text-xl bg-zinc-800/40 backdrop-blur-md outline-none resize-none shadow-xl rounded-lg text-white border border-zinc-500"
        name="text"
        id="text"
        placeholder="Write your text here..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="p-6 bg-zinc-800/40 backdrop-blur-md shadow-xl rounded-lg border border-zinc-500 text-white flex flex-col justify-center items-center gap-6">
        {qr && <img src={qr} alt="QR Code" />}

          {/* Download Button */}
          {qr && (
            <a
              className="px-4 py-2 active:scale-90 ease-linear transition-all bg-zinc-700 text-white rounded-lg w-full text-center cursor-pointer hover:bg-zinc-600"
              href={qr}
              download="qrcode.png"
            >
              Download
            </a>
          )}
      </div>
    </section>
  );
}
