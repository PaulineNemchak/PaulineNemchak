import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';

const Home: NextPage = () => {
  return (
      <Layout title='pauline nemchak'>
          <Container>
              <main>
                  <h1>
                      hello there
                  </h1>
                  <pre>
                      {
                          `
                                 .;o,
        __."iIoi,._              ;pI __-"-xx.,_
      \`.3"P3PPPoie-,.            .d' \`;.     \`p;
     \`O"dP"\`\`\`\`""\`PdEe._       .;'   .     \`  \`|
    "$#"'            \`\`"P4rdddsP'  .F.    \` \`\` ;
   i/"""     *"Sp.               .dPff.  _.,;Gw'
   ;l"'     "  \`dp..            "sWf;fe|'
  \`l;          .rPi .    . "" "dW;;doe;
   $          .;PE\`'       " "sW;.d.d;
   $$        .$"\`     \`"saed;lW;.d.d.i
   .$M       ;              \`\`  ' ld;.p.
__ _\`$o,.-__  "ei-Mu~,.__ ___ \`_-dee3'o-ii~m. ____

                          `
                      }
                  </pre>
              </main>
          </Container>
      </Layout>

  )
}

export default Home;
