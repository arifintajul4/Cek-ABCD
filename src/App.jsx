import { Fragment, useState } from 'react';

function App() {
  const [nama, setNama] = useState({
    kamu: '',
    dia: '',
  });

  const [hasil, setHasil] = useState({
    kamu: '',
    dia: '',
  });

  const [sameCharacter, setSameCharacter] = useState(['']);
  const [jumlahCharacter, setJumlahCharacter] = useState(0);

  const handleFindSameCharacter = () => {
    const arrKamu = nama.kamu.split('');
    const arrDia = nama.dia.split('');
    const sameCharacter = arrKamu.filter(
      (item) => arrDia.includes(item) && item !== ' '
    );
    console.log(sameCharacter);
    setSameCharacter(sameCharacter);
    setHasil({
      kamu: nama.kamu,
      dia: nama.dia,
    });
    setNama({
      kamu: '',
      dia: '',
    });

    // sum of different character
    const diffKamu = arrKamu.filter((item) => !sameCharacter.includes(item));
    const diffDia = arrDia.filter((item) => !sameCharacter.includes(item));
    const jumlahCharacter = diffKamu.length + diffDia.length;
    setJumlahCharacter(jumlahCharacter);
  };

  return (
    <>
      <main className="bg-gray-50 ">
        <div className="max-w-[425px] mx-auto py-5 bg-white min-h-screen px-5">
          <h1 className="text-center font-semibold text-2xl">
            Akrab Benci Cinta Dendam
          </h1>
          <p className="text-center mt-2">
            Tulis nama kamu dan pasangan kamu dibawah!
          </p>
          <div className="mt-10 space-y-4">
            <input
              className="w-full border-b-2 border-gray-50 focus:outline-none "
              placeholder="Nama kamu.."
              value={nama.kamu}
              onChange={(e) => setNama({ ...nama, kamu: e.target.value })}
            />
            <input
              className="w-full border-b-2 border-gray-50 focus:outline-none "
              placeholder="Nama pasangan kamu.."
              value={nama.dia}
              onChange={(e) => setNama({ ...nama, dia: e.target.value })}
            />
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={handleFindSameCharacter}
              disabled={nama.kamu === '' || nama.dia === ''}
              className="bg-black text-white rounded-md px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cek ABCD
            </button>
          </div>
          {jumlahCharacter > 0 && (
            <div>
              <div className="pt-5">
                <p className="text-2xl text-center">
                  {hasil?.kamu?.split('').map((el, idx) => {
                    return (
                      <Fragment key={idx}>
                        {' '}
                        <span
                          className={`${
                            sameCharacter.includes(el)
                              ? 'line-through text-gray-500'
                              : 'text-3xl'
                          }`}
                          key={idx}
                        >
                          {`${el}`}
                        </span>{' '}
                      </Fragment>
                    );
                  })}
                </p>
                <p className="text-2xl text-center">
                  {hasil?.dia?.split('').map((el, idx) => {
                    return (
                      <Fragment key={idx}>
                        {' '}
                        <span
                          className={`${
                            sameCharacter.includes(el)
                              ? 'line-through text-gray-500'
                              : 'text-3xl'
                          }`}
                          key={idx}
                        >
                          {`${el}`}
                        </span>{' '}
                      </Fragment>
                    );
                  })}
                </p>
                <p className="text-center mt-3 text-lg">
                  Jumlah karakter yang tidak sama{' '}
                  <span className="font-bold text-2xl">{jumlahCharacter}</span>
                </p>
              </div>
              <div>
                <ul className="text-2xl">
                  <li>A : {jumlahCharacter % 4 === 1 ? 'Akrab' : '-'}</li>
                  <li>B : {jumlahCharacter % 4 === 2 ? 'Benci' : '-'}</li>
                  <li>C : {jumlahCharacter % 4 === 3 ? 'Cinta' : '-'}</li>
                  <li>D : {jumlahCharacter % 4 === 0 ? 'Dendam' : '-'}</li>
                </ul>
              </div>
            </div>
          )}
          <div className=" fixed bottom-5 left-0 right-0 text-center">
            <p>
              Dibuat dengan <span className="text-red-500">&hearts;</span>{' '}
              <a
                target="_blank"
                href="https://github.com/arifintajul4"
                className="underline"
              >
                Tajul Arifin S
              </a>
            </p>
            <a
              className="underline"
              target="_blank"
              href="https://www.tiktok.com/@radityadika28/video/7352450617790549254"
            >
              sumber
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
