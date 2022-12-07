function Header() {
    return (
        <nav className="bg-white border-gray-200 sm:px-4 py-2.5 rounded sticky top-0">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <h2 className="p-3 text-2xl font-sans font-bold">freePhoto</h2>

                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                   <span class="sr-only">Open main menu</span>
                   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                       <li>
                          <a href="/" className="block text-lg  py-2 pl-3 pr-4 text-2l text-white  rounded md:bg-transparent md:text-black md:p-0 dark:text-black" aria-current="page">explore</a>
                      </li>
                       <li>
                          <a href="/" className="block text-lg  py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black" aria-current="page">sign in</a>
                       </li>
                       <li>
                          <a href="/" className="block text-lg  py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black" aria-current="page">log in</a>
                       </li>
                    </ul>
                 </div>
            </div>
        </nav>
    )
}

export default Header