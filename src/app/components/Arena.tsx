import ImagePlaceholder from "./ImagePlaceholder"

export default function Arena() {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700">Arena Info</h2>
            <div className="flex">
                <ImagePlaceholder />
                <div className="flex-initial">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In tempor varius ipsum varius pellentesque. Sed feugiat dolor et 
                        scelerisque porttitor. Fusce turpis massa, dapibus quis aliquet ut, 
                        tempor ut ligula. Praesent sodales enim elit, eu porttitor enim dictum 
                        in. Quisque maximus laoreet metus in imperdiet. Nam vitae urna at quam 
                        aliquet consectetur ac quis ex. Donec ac ipsum sit amet neque tristique 
                        pharetra. Maecenas imperdiet, eros vel gravida venenatis, eros nisi 
                        mollis lorem, et molestie diam tellus et dui. Sed semper dapibus 
                        tincidunt. Phasellus tincidunt, justo non fringilla porta, lectus 
                        tortor rutrum mauris, quis dignissim felis ipsum nec est. Sed.
                    </p>
                </div>
            </div>
        </div>
    )
}