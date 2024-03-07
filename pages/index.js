import Image from 'next/image';

function Home() {
    var html = (
        <div class="col-12">
            <h1>
                💕💕💕💕💕Ouuuu, mor, eu te amo muuuuuuitão! Se você me ama
                muuuuuuitão me manda uma mensagem falando! 💕💕💕💕💕
            </h1>
            <div class="col-12" style={{ display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'stretch', flexDirection: 'row' }}>
                <div class="row">
                    <span>
                        Primeira foto juntos 😍
                        <Image
                            src="/images/casadodu.png"
                            width="165"
                            height="220"
                        />
                    </span>
                </div>

                <div class="row">
                    <span>
                        Você canta muiitoo 😊
                        <Image
                            src="/images/violao.png"
                            width="165"
                            height="220"
                        />
                    </span>
                </div>

                <div class="row">
                    <span>
                        Meu nervosismo atoa 🤣
                        <Image
                            src="/images/passeimal.png"
                            width="165"
                            height="220"
                        />
                    </span>
                </div>

                <div class="row">
                    <span>
                        Nossa primeira vitória como casal 🙌💕💑
                        <Image
                            src="/images/alianca.png"
                            width="250"
                            height="300"
                        />
                    </span>
                </div>
                <div class="row">
                    <span>
                        Foto fofa demaisss 😍
                        <Image
                            src="/images/suspiro.png"
                            width="250"
                            height="300"
                        />
                    </span>
                </div>
            </div>
            <div class="col-12">
                <span>
                    Vídeo especial 💖
                    <video width="320" height="240" controls>
                        <source src="/videos/especialdmais.mp4" type="video/mp4" />
                    </video>
                </span>
            </div>
        </div>
    );
    return html;
}

export default Home;
