import { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

const cv: NextPage = () => {
    return(
        <Layout title='my cv'>
            <Container>
                <h1>my cv</h1>
                <main>
                   <ul>
                       <li>
                           <h3>
                               FRONTEND ENGINEER, BIOCAD — JUNE 2021 – PRESENT
                           </h3>
                           <ul>
                               <li>
                                   was developing web application that allows biologists constructing antibodies, keeping information about ways you can synthesise those antibodies and export data using react.js and typescript
                               </li>
                               <li>
                                   increased test coverage
                               </li>
                               <li>
                                   making this app we decreased antibody development costs by reducing losing data
                               </li>
                           </ul>
                       </li>
                       <li>
                           <h3>
                               FRONTEND ENGINEER, CTC MEDIA/MORE.TV — FEBRUARY 2020 – JUNE 2021
                           </h3>
                           <ul>
                               <li>
                                   i supported and added new features to those websites:
                                   ctclove.ru, domashniy.ru, chetv.ru, trikota.tv;
                                   further i joined more.tv team and took part in making more.tv website and it's admin panel.
                               </li>
                               <li>
                                   worked on redesigning chetv, migrate from static html and css to react.js, implemented stylelint to ctclove project
                               </li>
                               <li>
                                   made free lite versions of those websites i mentioned above using gatsby.js and also made a special project for domashniy: domashniy.ru/kulinariygid
                               </li>
                               <li>
                                   added some a/b tests which helped with increasing income in 2021
                               </li>
                               <li>
                                   added new features to more.tv and admin panel
                               </li>
                               <li>
                                   redesigned some parts of more.tv website
                               </li>
                           </ul>
                       </li>
                       <li>
                           <h3>
                               FRONTEND ENGINEER, ALTARIX, — JUNE 2019 – DECEMBER 2019
                           </h3>
                           <ul>
                               <li>
                                   was developing spa using react.js which should be used by mos.ru team to make mailing to list of users easier
                               </li>
                               <li>
                                   cared about accessibility and semantics of HTML so everything could be done without a mouse. it helped to increase productivity of workers who created emails
                               </li>
                               <li>
                                   developed a library of components
                               </li>
                               <li>
                                   added stylelint to the project
                               </li>
                               <li>
                                   was coding html emails when needed
                               </li>
                           </ul>
                       </li>
                   </ul>
                </main>
            </Container>
        </Layout>
    )
};

export default cv;
