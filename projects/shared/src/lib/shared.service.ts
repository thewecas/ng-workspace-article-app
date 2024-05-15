import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data$ = new BehaviorSubject<Article[]>([]);
  constructor() {
    this.data$.next(this.fetchArticleData());
    this.data$.subscribe(res =>
      this.updateArticleData(res)
    );
  }

  getData() {
    return this.data$;
  }

  getDataById(id: string) {
    return this.data$.value.find((article: any) => article.id == id) ?? null;
  }

  updateArticle(newArticle: Article) {
    const id = newArticle.id;
    const data = this.data$.value;
    const index = data.findIndex((article: Article) => article.id == id);
    if (index >= 0)
      data[index] = newArticle;
    else
      data.push(newArticle);
    this.data$.next(data);
  }

  removeArticle(id: string) {
    const data = this.data$.value;
    const index = data.findIndex((article: Article) => article.id == id);
    if (index >= 0) {
      data.splice(index, 1);
    }
    this.data$.next(data);

  }

  private fetchArticleData() {
    const stringData = localStorage.getItem('ng-article-data');
    let data: Article[] = [];
    if (stringData)
      data = JSON.parse(stringData);
    else {
      data = this.Dummyata;
      this.updateArticleData(data);
    }
    return data;
  }


  private updateArticleData(data: Article[]) {
    localStorage.setItem('ng-article-data', JSON.stringify(data));
  }


  private Dummyata = [
    {
      id: 'b0d756fe-544e-40c8-90c0-fac8e2ba0a6b',
      title: 'The Ever-Evolving Web: A Look at the Past, Present, and Future',
      content: `The web, once a collection of static pages, has transformed into a dynamic ecosystem. From humble beginnings in the 1980s, it has revolutionized communication, commerce, and information access.

Early websites relied on plain text and basic graphics. Today, interactivity reigns supreme with rich multimedia, interactive applications, and real-time updates. Technologies like JavaScript, HTML5, and CSS3 power these advancements.

Social media platforms have become ingrained in our lives, fostering connection and community. E-commerce giants have redefined shopping, offering convenience and global reach.

The future of the web is brimming with possibilities. Artificial intelligence promises a more personalized and intuitive experience. WebAssembly is paving the way for faster, more efficient applications. Blockchain technology could reshape online interactions, emphasizing security and transparency.

However, challenges remain. Data privacy concerns loom large, demanding robust solutions. The digital divide persists, leaving many without access to this vital resource.
As the web continues to evolve, one thing is certain: it will remain a powerful force shaping our world, connecting people, and driving innovation.`        ,
      author: 'Elmer Lubowitz',
      publishDate: '2024-04-15T09:33:45.479Z',
      likes: 234
    },
    {
      id: '6aa613e1-2abc-4120-867f-85ca7528e2b7',
      title: 'Angular SSR: Boosting Performance and SEO',
      content: `Elevating your Angular application's user experience and search engine optimization (SEO) can be achieved through server-side rendering (SSR). This technique involves rendering your application's initial HTML content on the server, delivering a faster initial load for users.

  By pre-rendering content on the server, users see a meaningful page layout instantly, even before JavaScript kicks in. This improves perceived performance, especially on slower connections.

  SSR also benefits SEO. Search engine crawlers can easily access and index your content, leading to better ranking and organic traffic. They can readily understand your application's structure and content without relying solely on JavaScript execution.

  While Angular excels at building dynamic single-page applications (SPAs), SSR adds another dimension. It provides the best of both worlds: a faster initial experience and strong SEO foundation.

  However, keep in mind that SSR introduces some complexity, requiring additional server-side setup and considerations. But for applications where performance and SEO are crucial, Angular SSR is a powerful tool to enhance your web presence.`,
      author: 'Mrs. Rebecca Feest',
      publishDate: '2023-05-18T07:47:13.896Z',
      likes: 4546
    },
    {
      id: '6d7b31b2-ab28-40c0-9b06-a452bc088de1',
      title: 'Angular: A Powerful Framework for a Bright Future',
      content: `Angular, a popular JavaScript framework for building web applications, has carved a strong niche in the developer landscape. Its emphasis on structure, scalability, and tooling makes it ideal for complex, enterprise-grade applications.

    One of Angular's core strengths lies in its component-based architecture. This approach promotes code reusability, modularity, and easier maintenance of large projects. Robust features like dependency injection and two-way data binding further streamline development.

    Looking ahead, Angular's future is promising. The team behind it is constantly innovating, focusing on improving developer experience and performance. Initiatives like Ivy, a compiler rewrite, have led to significant performance gains.

    A key area of focus is simplifying the onboarding process for new developers. Streamlined tooling and improved documentation aim to make Angular more accessible, attracting a wider talent pool.

    Furthermore, Angular is embracing the evolving web. Advancements in server-side rendering (SSR) cater to the need for faster initial page loads and improved SEO. Compatibility with emerging web standards ensures that Angular applications stay at the forefront.

    In conclusion, Angular's robust feature set, focus on developer experience, and commitment to innovation position it as a strong contender for the future of web development.`,
      author: 'Dennis Nader',
      publishDate: '2023-05-27T12:50:33.760Z',
      likes: 522
    }
    ,
    {
      id: 'c6e91a60-e64a-4b70-b855-2eb6cf5ece49',
      title: 'AI: Shaping a Transformative Tomorrow',
      content: `Artificial intelligence (AI) is rapidly transitioning from science fiction to everyday reality. Its potential to revolutionize various aspects of our lives is undeniable. From healthcare advancements to environmental solutions, AI promises to be a game-changer.
    In the healthcare sector, AI can analyze vast amounts of medical data, aiding in early disease detection, personalized treatment plans, and drug discovery. Imagine AI-powered tools supporting doctors for more accurate diagnoses and improved patient outcomes.
    AI can also play a crucial role in tackling environmental challenges. It can optimize energy use, monitor and predict weather patterns, and even design sustainable solutions for resource management.
    Beyond these specific areas, AI has the potential to transform how we work and learn. It can automate repetitive tasks, freeing up human potential for creative endeavors. Additionally, AI-powered personalized learning platforms can tailor education to individual needs, making it more effective and engaging.
    However, ethical considerations surrounding AI development and deployment remain paramount. Responsible AI requires careful attention to bias, transparency, and human oversight. We must ensure that AI serves humanity and is used for good.
    As AI continues to evolve, one thing is certain: it will profoundly impact our future. By harnessing its power responsibly, we can create a world that is more efficient, sustainable, and beneficial for all.`,
      author: 'Amos Bailey',
      publishDate: '2024-05-14T06:25:56.243Z',
      likes: 232,
    },
    // {
    //   id: '',
    //   title: '',
    //   content: ``,
    //   author: '',
    //   publishDate: '',
    //   likes: 232,
    // }
  ];
}
