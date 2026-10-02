import { animeTrendingUrl, nameKatakana, projectLinks } from './shared'
import type { Content } from './types'

export const ja: Content = {
  meta: {
    title: `Jorden Carter-Whitbey（${nameKatakana}）｜ソフトウェアエンジニア`,
    description:
      '名古屋市在住のソフトウェアエンジニア。WebアプリケーションやAPIの開発、CI/CD環境の構築に約6年間携わり、' +
      '現在、日本でソフトウェアエンジニア職を探しています。',
  },
  nav: {
    goal: '目標',
    experience: '職歴',
    projects: 'プロジェクト',
    skills: 'スキル',
    contact: '連絡先',
  },
  hero: {
    nameReading: nameKatakana,
    title: 'ソフトウェアエンジニア',
    location: '愛知県名古屋市在住',
    tagline:
      'WebアプリケーションやAPIの開発、CI/CD環境の構築に約6年間携わってきたソフトウェアエンジニアです。' +
      '現在、日本でソフトウェアエンジニア職を探しています。',
    contactCta: '連絡する',
  },
  goal: {
    heading: '目標',
    // 履歴書の「志望の動機」より
    paragraphs: [
      'これまで約6年間、ソフトウェアエンジニアとしてWebアプリケーションやAPIの開発、CI/CD環境の構築などに携わってきました。' +
        'Angular、Spring Boot、AWS、Google Cloudなど幅広い技術を活用した開発経験を生かし、' +
        'チームの一員としてサービスの品質向上と開発効率の向上に貢献したいと考えています。',
      'また、海外で培った経験と日本語能力を生かし、日本の開発チームで新しい技術や知識を学びながら成長していきたいと考えています。',
    ],
  },
  experience: {
    heading: '職歴',
    roles: [
      {
        company: 'Anime Trending',
        url: animeTrendingUrl,
        title: 'コントラクト ソフトウェアエンジニア（業務委託）',
        dates: '2021年2月 – 現在',
        highlights: [
          'Next.jsとTypeScript、FirebaseとFirestoreで構築した公開Webサイトの主要開発者として開発を担当',
          '投票、チャート、アワードなどを扱うバックエンドAPIを、Firebase Cloud FunctionsとExpressで構築',
          '投票、チャート、ニュース、広告を管理するAngular製の管理画面を開発',
          '当初はAngular Universalフロントエンド（1日平均約5,000ユーザーが利用）でサイトをFirebaseへリプラットフォームし、2023年からNext.jsで再構築',
          'Dockerイメージのビルド、GCP Container Registryへのプッシュ、Cloud RunへのデプロイまでのGitLabパイプラインを構築',
          'Next.js 16とSupabaseによる次期バージョンを開発中（Firebaseからの移行）',
          '新規参画メンバーのメンタリングを行い、早期の立ち上がりと成果創出を支援',
        ],
      },
      {
        company: 'State Farm',
        title: 'リードソフトウェアエンジニア',
        dates: '2019年12月 – 2025年4月',
        note: 'ソフトウェアエンジニアとして入社、2024年3月にリードソフトウェアエンジニアへ昇格',
        highlights: [
          'Angularを用いたPWAを開発し、AWS、Cloud Foundry、Firebaseへデプロイ',
          'CodeceptJSによる自動受け入れテスト、およびExpressによるREST APIを作成',
          'Spring BootフレームワークによるREST APIを開発',
          'AngularおよびSpring BootアプリケーションのCI/CD用Jenkinsパイプラインを構築',
          'Kotlin、Groovy、Docker、Kubernetesを用いたプロジェクトを開発',
        ],
      },
      {
        company: 'Shelter Insurance',
        title: 'ソフトウェアデベロッパー II',
        dates: '2019年5月 – 2019年12月',
        highlights: [
          '新規・既存のSpring Bootアプリケーションに対し、コードカバレッジを網羅するユニットテスト・結合テストを作成',
          '業務上のデータ取得要件をDB2のSQLクエリとして実装',
          'スクラムとカンバンを組み合わせたアジャイルチームで、ユーザー要件を実装するためのストーリーを作成',
          'ジュニア開発者へのメンタリング、および製品機能を説明するドキュメントの作成',
          'Droolsを用いて、既存の保険金請求処理アプリケーションに新しいビジネスルールを実装',
        ],
      },
      {
        company: 'Shelter Insurance',
        title: 'ジュニアソフトウェアデベロッパー',
        dates: '2018年4月 – 2019年5月',
        highlights: [
          '契約者向けAndroidアプリの自動受け入れテストを、SeleniumとAppiumを用いて設計・実装',
          'CloudWatchを利用したAWS Lambda関数を作成',
          'ETL処理を支援するGroovy、Java、Pythonスクリプトを作成',
          'SalesforceのVisualforceページ、トリガー、Apexクラスを開発',
        ],
      },
      {
        company: 'Shaffer & Associates',
        title: 'リーガルアソシエイト',
        dates: '2015年8月 – 2018年4月',
        highlights: [
          '法的書類の処理、およびシステムへの新規アカウント登録',
          '裁判所への書類提出、弁護士との会話内容の文字起こし',
          '裁判所および雇用主から受領した支払いの処理',
        ],
      },
    ],
  },
  projects: {
    heading: 'プロジェクト',
    liveLabel: 'サイトを見る',
    sourceLabel: 'ソースコード',
    items: [
      {
        name: 'Anime Trending',
        badge: '業務委託',
        description:
          'Anime TrendingのWebサイト。週間アニメ人気チャート、ファン投票、Anime Trending Awards、ニュースを提供。' +
          '業務委託エンジニアとして、Next.js製の公開サイト（DockerとGitLab CIによるパイプラインでCloud Runへデプロイ）の主要開発者を担当。' +
          'Firebase Cloud FunctionsによるAPIの構築、Angular製管理画面の開発も担当。' +
          '現在はNext.js 16とSupabaseによる次期バージョンを開発中。',
        tech: ['Next.js', 'TypeScript', 'Firebase Cloud Functions', 'Cloud Run', 'Angular', 'Supabase'],
        ...projectLinks.animeTrending,
      },
      {
        name: 'Jojos Study Buddy',
        description:
          '例文付きの語彙フラッシュカード、文法、まとめテスト、漢字辞典、JLPT N3対策クイズを備えた日本語学習アプリ。',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
        ...projectLinks.studyBuddy,
      },
      {
        name: 'Ledger of Days',
        description:
          'モバイルファーストの個人向け習慣トラッカー。良い習慣や減らしたい行動を記録でき、' +
          '連続記録の表示、月間カレンダー、項目別のインサイト、カスタムイベントタイプに対応。',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Recharts'],
        ...projectLinks.ledgerOfDays,
      },
      {
        name: 'このポートフォリオ',
        description:
          '本サイト。Next.jsで構築し、Vercelにデプロイした日本語・英語対応の静的サイト。以前のAngular版から全面的に書き直し。',
        tech: ['Next.js', 'TypeScript', 'Sass', 'Vercel'],
        ...projectLinks.portfolio,
      },
    ],
  },
  skills: {
    heading: 'スキル',
    items: [
      { name: 'Java / Kotlin / Groovy', detail: '複数のSpring Bootアプリケーションの保守・改善' },
      { name: 'SQL', detail: 'Shelter Insuranceにて、要求されたデータを取得するクエリの作成・最適化' },
      {
        name: 'Web開発',
        detail: 'CSS、HTML、JavaScript、jQuery、Angular、TypeScript、PHPを用いたWebページの作成',
      },
      {
        name: 'C',
        detail: 'スタック、キュー、二分探索木、二分木、赤黒木、グラフアルゴリズムを用いたプログラムの作成',
      },
      {
        name: 'Amazon Web Services',
        detail: 'Shelter InsuranceにてRedshift、S3、EC2、Lambda、CloudWatch、EMRを使用',
      },
      { name: 'Android', detail: 'サイドプロジェクトとして、チームでライドシェアアプリを開発' },
    ],
  },
  certifications: {
    heading: '免許・資格',
    items: [
      { name: '日本語能力試験（JLPT）N3 合格', date: '2026年7月' },
      { name: 'AWS Certified Cloud Practitioner', date: '2025年2月' },
    ],
  },
  education: {
    heading: '学歴',
    items: [
      {
        name: 'University of Missouri（アメリカ・ミズーリ州）',
        detail: '工学部 コンピュータサイエンス 卒業',
        date: '2015年8月 – 2019年5月',
      },
    ],
  },
  contact: {
    heading: '連絡先',
    body: '名古屋市在住で、現在、日本でソフトウェアエンジニア職を探しています。お気軽にご連絡ください。',
    visa: '現在は在留資格「留学」で滞在しており、就職に際して就労可能な在留資格への変更を希望しています。',
    emailLabel: 'メール',
  },
}
