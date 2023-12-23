export default function Page() {
  return (
      <div className="min-h-screen flex flex-col">
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost text-xl">mikedidomizio.com</a>
        </div>
        <main className="flex flex-wrap px-4 md:px-6 lg:px-8 py-6 md:py-12 lg:py-16 space-y-6 md:space-y-12 lg:space-y-16 md:space-x-6 lg:space-x-16">
          <section className="w-full">
            <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/3 px-2">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Shoes!
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  )
}
