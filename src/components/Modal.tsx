interface ModalProps {
  showModal: boolean
}

export const Modal = ({ showModal }: ModalProps) => {
  function refreshPage() {
    window.location.reload()
  }

  return (
    <>
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-sm">
              {/*content*/}
              <div className="relative flex w-full flex-col items-center rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex w-full justify-center rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-center text-xl font-semibold text-primary-200">
                    Dados enviados
                  </h3>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-center text-lg leading-relaxed text-slate-500">
                    Seus dados foram enviados com sucesso.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex w-full items-center justify-center rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={refreshPage}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      )}
    </>
  )
}
