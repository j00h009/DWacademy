import "./Scroll.css";
import { motion, useScroll } from "framer-motion";

export function Scroll() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);

  return (
    <>
      <div className="container">
        <motion.div
          className="bar"
          // 가로(원본) :  style={{ scaleX: scrollYProgress }}
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dignissim mattis justo, sed venenatis quam eleifend ac. Nunc euismod
            dui consequat, maximus ligula id, malesuada diam. Donec a mauris ut
            massa commodo suscipit. Aenean in nisi consectetur, laoreet enim at,
            rutrum massa. Nulla elementum aliquam turpis, vel volutpat lectus
            volutpat nec. Sed id augue tellus. Morbi nunc velit, lacinia nec
            rhoncus a, congue eu leo. Nulla sed tortor at nisl vulputate mollis.
            Integer pharetra lobortis mi, quis interdum erat cursus luctus.
            Morbi commodo ut ante sed placerat. Suspendisse vel est eget dui
            auctor tempus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nam at vehicula risus. Maecenas hendrerit tellus a tortor
            ullamcorper scelerisque. Phasellus efficitur mollis varius.
          </p>
        </div>
        <div>
          <p>
            Suspendisse volutpat ac libero id placerat. Duis et vehicula magna.
            Duis at nulla pellentesque orci viverra bibendum nec vel libero. Nam
            commodo lacinia nunc vel imperdiet. Nam lobortis, diam quis molestie
            feugiat, dui orci scelerisque erat, nec vehicula ante sapien ut ex.
            Aenean a ante quam. Nam mattis vel nisi eget viverra. Donec pretium
            massa lacus, sed dapibus nisi consectetur vitae. Sed id erat eget
            quam volutpat laoreet. Duis gravida velit risus, quis efficitur
            ipsum posuere sed. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Sed pulvinar urna rhoncus ipsum blandit, nec mollis
            nibh volutpat.
          </p>
        </div>
        <div>
          <p>
            Pellentesque a convallis erat. Aenean elementum, sapien nec
            consectetur pretium, nibh ipsum suscipit dui, ac volutpat turpis
            velit in mi. Nullam tempor vitae felis quis sagittis. Mauris nec
            congue quam, quis posuere nisl. Vestibulum malesuada molestie
            tellus, lobortis gravida diam cursus bibendum. Ut rhoncus justo ut
            nunc consequat condimentum. Mauris magna enim, tempor sit amet
            cursus eget, volutpat a nisl. Mauris sit amet consequat nibh. Sed eu
            enim commodo, rhoncus leo vitae, finibus lacus. Fusce mauris risus,
            blandit et nibh non, luctus hendrerit purus. Maecenas sodales nisi
            eget nibh tempor auctor.
          </p>
        </div>
        <div>
          <p>
            Quisque scelerisque elementum mi, eu tristique felis malesuada vel.
            Sed quis efficitur ligula, ac vestibulum arcu. Ut varius tellus ac
            interdum mollis. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nam vel diam dui. Proin
            ac ipsum non massa faucibus porta dictum eu urna. Ut eu turpis
            vehicula, bibendum magna in, vehicula sem. Pellentesque ut aliquam
            diam, a viverra tortor. Aliquam aliquet nisl eget lectus malesuada
            vulputate. Praesent quam felis, suscipit eget nisi vitae, venenatis
            aliquam augue. Vestibulum ut rhoncus felis. In hac habitasse platea
            dictumst. Quisque nisl nunc, consectetur et sem ac, porttitor
            maximus libero. Morbi sed nunc semper, faucibus neque at, sagittis
            arcu. Sed magna urna, porta a ante at, efficitur lacinia erat.
          </p>
        </div>
        <div>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Duis congue placerat viverra. Aenean
            molestie nibh nisl, ut ullamcorper tellus feugiat vitae. Sed nec
            maximus odio. Sed sit amet urna at purus congue lobortis. Nullam
            facilisis nibh semper mi dictum, vitae lacinia ante commodo.
            Maecenas laoreet ipsum ut tortor mollis, tincidunt tempor massa
            ultricies. Praesent fermentum enim dolor, vitae lobortis nisi
            efficitur id.
          </p>
        </div>
        <div>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin id est tincidunt, mattis lacus eget,
            volutpat sem. Pellentesque vitae interdum diam. In dignissim gravida
            urna, et commodo leo pellentesque ac. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Cras
            euismod pulvinar justo. Phasellus varius nisl vel ante imperdiet
            lobortis. Duis elit lorem, tincidunt in felis et, mattis molestie
            ipsum. Pellentesque non enim ullamcorper, maximus neque non, feugiat
            massa. Donec sit amet nulla non lacus fermentum convallis et
            bibendum diam. Aenean id interdum metus, ut ullamcorper mauris.
            Integer ornare ex vitae vulputate ullamcorper. Nullam placerat
            sagittis purus. Mauris fermentum malesuada mauris, sit amet
            facilisis nunc suscipit quis. Donec facilisis iaculis lectus, at
            pulvinar libero hendrerit id.
          </p>
        </div>
      </div>
    </>
  );
}
