import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';

const cv: NextPage = () => {
    return(
        <Layout title='my cv'>
            <Container>
                <h1>my cv</h1>
                <main>
                   <ul>
                       <li>
                           <h3>
                               FRONTEND ENGINEER, IHS MARKIT — JANUARY 2022 – PRESENT
                           </h3>
                           <ul>
                               <li>
                                   develop a react + typescript + redux toolkit spa for customers (b2b) from scratch
                               </li>
                               <li>
                                   provide my expertise in frontend working in a team of back-end end devops engineers
                               </li>
                               <li>
                                   make suggestions and improvements like switching from yarn1 to pnpm to improve developer experience
                               </li>
                               <li>
                                   provide code review and refactor code when needed
                               </li>
                               <li>
                                   increase test coverage using react testing library and playwright
                               </li>
                           </ul>
                       </li>
                       <li>
                           <h3>
                               FRONTEND ENGINEER, BIOCAD — JUNE 2021 – DECEMBER 2021
                           </h3>
                           <ul>
                               <li>
                                   i was developing web application that allows biologists to construct, save and export data using react.js and typescript
                               </li>
                               <li>
                                   increased test coverage (using jest and react testing library)
                               </li>
                               <li>
                                   by making this app we decreased antibody development costs by reducing losing data
                               </li>
                           </ul>
                       </li>
                       <li>
                           <h3>
                               FRONTEND ENGINEER, CTC MEDIA/MORE.TV — FEBRUARY 2020 – JUNE 2021
                           </h3>
                           <ul>
                               <li>
                                   i supported and added new features to those websites: ctclove.ru, domashniy.ru, chetv.ru, trikota.tv
                               </li>
                               <li>
                                   worked on redesigning chetv, migrate from static html and css to react.js, implemented stylelint to ctclove project
                               </li>
                               <li>
                                   made free lite versions of those websites i mentioned above using gatsby.js and also made a special project for domashniy: domashniy.ru/kulinariygid
                               </li>
                           </ul>
                           <p>
                               further i joined more.tv team and took part in making more.tv website and it&apos;s admin panel:
                           </p>
                           <ul>
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
                                   was developing spa using react.js which should be used to make mailing to a list of users easier
                               </li>
                               <li>
                                   cared about accessibility and semantics of HTML so everything could be done without a mouse. it helped to increase the productivity of workers who created emails
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
                       <li>
                           <h3>
                               FRONTEND ENGINEER, CITRON — JANUARY 2019 – MAY 2019
                           </h3>
                           <ul>
                               <li>
                                   was working on developing various websites in a web studio
                               </li>
                               <li>
                                   used pieces of knowledge in HTML, CSS, semantics and accessibility to training other staff members like SEO specialists and designers
                               </li>
                           </ul>
                       </li>
                   </ul>
                </main>
            </Container>
        </Layout>
    );
};

export default cv;
