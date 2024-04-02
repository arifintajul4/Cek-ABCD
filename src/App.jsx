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
      (item) => arrDia.includes(item.toLowerCase()) && item !== ' '
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
    const diffKamu = arrKamu.filter(
      (item) => !sameCharacter.includes(item.toLowerCase())
    );
    const diffDia = arrDia.filter(
      (item) => !sameCharacter.includes(item.toLowerCase())
    );
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
          <div
            onClick={() => {
              window.open(
                'https://www.tiktok.com/@radityadika28/video/7352450617790549254',
                '_blank'
              );
            }}
            className="w-10 h-10 absolute bottom-10 right-5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.83834 14.1056 10.6796 13.3353 11.1354C13.1385 11.2518 12.9761 11.3789 12.8703 11.5036C12.7675 11.6246 12.75 11.7036 12.75 11.75V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V11.75C11.25 11.2441 11.4715 10.8336 11.7266 10.533C11.9786 10.236 12.2929 10.0092 12.5715 9.84439C12.9044 9.64739 13.125 9.28655 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                fill="#1C274C"
              />
            </svg>
          </div>
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
            {/* <a
              className="underline"
              target="_blank"
              href="https://www.tiktok.com/@radityadika28/video/7352450617790549254"
            >
              sumber
            </a> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
