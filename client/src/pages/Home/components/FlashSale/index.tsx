import { FcFlashOn } from "react-icons/fc";

export default function FlashSale() {
  return (
    <section>
      <header>
        <span>
          <FcFlashOn fontSize={30} />
          Flash Sale
        </span>
        <p>
          Termina em: <span>05</span>:<span>37</span>:<span>26</span>
        </p>
        <a href="">ver todos</a>
      </header>
    </section>
  );
}
