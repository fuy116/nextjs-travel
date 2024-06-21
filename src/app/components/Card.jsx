/**  
* @author Sean <fuy0116@gmail.com>
*/

import AutoSizeImage from "./AutoSizeImage";

export default function CustomCard({ item }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg  transform hover:-translate-y-1 hover:shadow-xl bg-white">
            <div className="w-full h-48 overflow-hidden border-b">
                <AutoSizeImage loader={() => item.Picture.PictureUrl1} src={item.Picture.PictureUrl1} />
            </div>
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{item.ScenicSpotName}</h2>
            </div>
        </div>
    );
}