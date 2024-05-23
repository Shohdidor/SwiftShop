import "../App.css";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";



const Layout = () => {
  let { pathname } = useLocation();

  // useEffect(() => {
  // }, []);

  return (
    <>
    <div className="flex justify-around items-center py-[20px]">
      <h1 className="Logo text-[50px] pl-[10px]">
        <span className="hover:text-green-600 mt-[-2px]">
          S
        </span>
      wiftShop
      </h1>

      <ul class="example-2">
  <li class="icon-content">
    <Link to={"/"}>
    <a
      aria-label="Home"
      data-social="pinterest"
      >
      <div class="filled"></div>
      <svg version="1.1" viewBox="0 0 24 24">
        <path
        d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
          fill="currentColor"
          >
          </path>
      </svg>
    </a>
          </Link>
    <div class="tooltip">Spotify</div>
  </li>
  <li class="icon-content">
    <Link to={"cart"}>
    <a
      aria-label="Pinterest"
      
      data-social="spotify"
    >
      <div class="filled"></div>
      <svg version="1.1" viewBox="20 -1 30 24" xml:space="preserve">
        <path
         d="M31 18c-1.1 0-1.99.9-1.99 2S29.9 22 31 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S39.9 22 41 22s2-.9 2-2-.9-2-2-2zM31.24 4.99C31.66 4.38 32.26 4 33 4h11c.55 0 1.04.29 1.32.74l3.22 5.5c.18.31.26.66.26 1.01 0 .83-.67 1.5-1.5 1.5H32.16l-1.07 2H43c.55 0 1 .45 1 1s-.45 1-1 1H30c-.61 0-1.16-.28-1.52-.76L24.75 5.97C24.33 5.36 24.03 4.57 24.03 3.72 24.03 2.78 24.66 2 25.58 2H29.5c.61 0 1.16.28 1.52.76L31.24 4.99zM33 6H26l3.6 6H39.4L33 6z" fill="currentColor"
        ></path>
      </svg>
    </a>
      </Link>
    <div class="tooltip">Pinterest</div>
  </li>
  <li class="icon-content">
    <Link to={"login"}>
    <a
      aria-label="Dribbble"
      data-social="dribbble"
    >
      <div class="filled"></div>
      <svg version="1.1" viewBox="0 -2 24 30">
        <path
d="M10 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6v-2H4V4h6V2zm10.59 10L14 7.41 15.41 6l5.59 5.59L15.41 17 14 15.59 19.59 10z" fill="currentColor"          fill="currentColor"
          ></path>
      </svg>
    </a>
          </Link>
    <div class="tooltip">Dribbble</div>
  </li>
  <div class="searchBox">

            <input class="searchInput" type="text" name="" placeholder="Search something" />
            <button class="searchButton" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                   
                  

  <g clip-path="url(#clip0_2_17)">
    <g filter="url(#filter0_d_2_17)">
      <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
    </g>
  </g>
  <defs>
    <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
      <feOffset dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="out"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
    </filter>
    <clipPath id="clip0_2_17">
      <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
    </clipPath>
  </defs>
</svg>
                     

            </button>
  </div>
  </ul>

    </div>

      <Outlet></Outlet>

      <div className="Footer">
          <div className="text-white flex justify-around py-[100px] cursor-default">
            <div className="mt-[50px]">
            <h1 className="Logo text-[30px]">
              Swif
              <span className="text-black">
              t
              Shop
              </span>
            </h1>
            <p className="font-bold">
        24 Atlantic
        <span className="text-black px-[10px]">
           Ave, Brooklyn, NY 11201
          </span>
        <br />
        +1 917 2 <span className="text-black">
          34 2347
          </span>
        <br />
        © 2023 Drea
        <span className="text-black">
        my Inc. All rights reserved.
        </span>
            </p>

            <p className="pt-[15px]">
            2024 Peter Parker,
            <span className="text-black">
             New-Yourk, AMC 0801
            </span>
            </p>
            </div>

            <div className="mt-[50px] text-black font-bold cursor-default">
      <h4>About</h4>
      <ul>
        <li>Company</li>
        <li className="text-white">Community</li>
        <li className="text-white">Careers</li>
      </ul>
    </div>
    <div className="mt-[50px] font-bold cursor-default">
      <h4>Blog</h4>
      <ul>
        <li>Tech</li>
        <li>Adventure</li>
        <li>Music</li>
        <li>Video</li>
      </ul>
    </div>
    <div className="mt-[50px] font-bold cursor-default">
      <h4>Products</h4>
      <ul>
        <li>Dreamy App</li>
        <li>Dreamy Desktop</li>
        <li>Dreamy Cloud</li>
      </ul>
    </div>

          </div>
      </div>
    </>
  );
};

export default Layout;
