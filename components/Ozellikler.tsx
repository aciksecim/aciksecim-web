

const Ozellikler = () => {

  return (
    <>

  <div className="container my-12 px-6 mx-auto">

    <section className="mb-20 text-gray-800">
      <div className="flex justify-center">
        <div className="text-center max-w-[700px]">
          <p className="uppercase text-brandColor font-bold mb-6">Ozellikler</p>
          <h2 className="text-3xl font-bold mb-6">Açık Seçim Nedir?</h2>
          <p className="text-gray-500 mb-12">
            Sandık seçim sonuçlarını; mobil uygulama ve web sitesi üzerinden anında
            güncelleyip, takip edebilmenizi sağlayan güvenilir ve açık kaynak kodlu 
            seçim sonuç takip sistemidir."
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
        <div className="mb-12">
          <div className="flex">
            <div className="shrink-0 mt-1">
              <svg className="w-4 h-4 text-brandColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                </path>
              </svg>
            </div>
            <div className="grow ml-4">
              <p className="font-bold mb-1">Özgür</p>
              <p className="text-gray-500">
                Hiç kimseye bağlı değil.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <div className="shrink-0 mt-1">
              <svg className="w-4 h-4 text-brandColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                </path>
              </svg>
            </div>
            <div className="grow ml-4">
              <p className="font-bold mb-1">Güvenilir ve Şeffaf</p>
              <p className="text-gray-500">Magna lacus iaculis elit, quis pharetra varius.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <div className="shrink-0 mt-1">
              <svg className="w-4 h-4 text-brandColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                </path>
              </svg>
            </div>
            <div className="grow ml-4">
              <p className="font-bold mb-1">Hızlı ve Güncel</p>
              <p className="text-gray-500">Anlık olarak kullanalım sayesinde seçim sandık sonuçlarını hızlı olarak toplayabilme imkanı.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <div className="shrink-0 mt-1">
              <svg className="w-4 h-4 text-brandColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                </path>
              </svg>
            </div>
            <div className="grow ml-4">
              <p className="font-bold mb-1">Açık Kaynak Kodlu</p>
              <p className="text-gray-500">Açık kaynak, yazılım ve veri kaynaklarının herkes tarafından erişilebilir, kullanılabilir ve değiştirilebilir olmasını sağlar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
    </>

  )

}

export default Ozellikler;