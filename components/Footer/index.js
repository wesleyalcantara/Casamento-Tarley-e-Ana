import Icon from "../Icon/Icon.jsx";

export default function Footer() {
    return (
    <div className="mt-10 bg-pink-200 text-gray-800 flex justify-center items-start flex-col">
        <div className="flex flex-col ml-5 gap-1 mb-4">
            <h3 className="font-bold my-2">
                Instagram dos noivos
            </h3>
            <p className="flex flex-row gap-2">
                <a href="https://www.instagram.com/tarleybatista?igsh=MWcweW56MWF3cXJjbQ==">
                    <Icon name="instagram" />
                </a>
                @tarleybatista
            </p>
            <p className="flex flex-row gap-2">
                <a href="https://www.instagram.com/ana_flavia650?igsh=MW9wYzY5ODkzbGF2Nw==">
                    <Icon name="instagram" />
                </a>
                @ana_flavia650
            </p>
        </div>
        <div className="w-full">
        <div className=" bg-gray-400 px-5 text-sm">
            <p>
                <ul>
                    <li>Desenvolvido por: Wesley Batista Alcantara</li>
                </ul>
            </p>
        </div>
        </div>
    </div>
    );
  }