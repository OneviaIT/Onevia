export type ArtId =
  | 'strategy'
  | 'rag'
  | 'slo'
  | 'cicd'
  | 'legacy'
  | 'cloud'
  | 'tenant'
  | 'customsaas'
  | 'agentic'
  | 'safeai'
  | 'qa'
  | 'consult';

export type Block =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  art: ArtId;
  featured?: boolean;
  body: Block[];
};

const h = (text: string): Block => ({ type: 'h', text });
const p = (text: string): Block => ({ type: 'p', text });
const ul = (items: string[]): Block => ({ type: 'ul', items });

export const posts: Post[] = [
  {
    slug: 'everything-as-a-service-one-partner',
    title: 'Everything as a Service: why one partner beats a dozen vendors',
    excerpt:
      'The hidden cost of multi vendor stacks, and how a single accountable partner with shared context changes delivery economics.',
    category: 'Strategy',
    readTime: '6 min',
    art: 'strategy',
    featured: true,
    body: [
      p('Most software teams do not have one problem. They have many small ones. A backend to build, tests to write, servers to run, and an AI feature everyone keeps asking about. So they hire a different vendor for each job.'),
      p('On paper this looks smart. Each vendor is a specialist. In real life, it often feels like herding cats.'),
      h('Where the cost hides'),
      p('The invoice is only the start. The bigger cost is the time your own people spend passing information from one vendor to another. The QA team does not know why the backend changed. The DevOps team does not know what the AI team is planning. Your product manager becomes the glue, and the glue is tired.'),
      ul([
        'Every vendor has its own contract, process and way of working.',
        'Context gets lost every time work moves between teams.',
        'When something breaks, everyone points at someone else.',
      ]),
      h('What changes with one partner'),
      p('With one accountable partner, the same team understands your product from the first design to the last deployment. They know why a decision was made, because they were there when it was made. Fixes are faster because nobody argues about whose problem it is.'),
      p('That is the idea behind Everything as a Service at Onevia Labs. You can start with a single service, like SaaS development or DevOps, and add more later. The context grows with you instead of starting from zero each time.'),
      h('Is it right for everyone?'),
      p('Not always. If you only need one small task done, a single freelancer might be perfect. But if you are building a product that has to grow, one partner who sees the whole picture will usually save you time, money and a lot of meetings.'),
    ],
  },
  {
    slug: 'production-rag-blueprint',
    title: 'A pragmatic blueprint for production RAG',
    excerpt: 'Retrieval, evaluation, and guardrails for assistants that actually ship.',
    category: 'AIaaS',
    readTime: '8 min',
    art: 'rag',
    body: [
      p('RAG stands for retrieval augmented generation. In simple words, the assistant first looks up the right information in your own documents, and then writes an answer using what it found. It is how you stop an AI from making things up about your business.'),
      p('A demo of RAG takes an afternoon. A RAG system that people trust takes real care. Here is the path we follow.'),
      h('1. Get your documents ready'),
      p('Messy documents give messy answers. Remove duplicates, fix old versions, and split long files into small, meaningful pieces. Keep a note of where each piece came from, so the assistant can show its source.'),
      h('2. Make retrieval good before you touch the AI'),
      p('If the search step brings back the wrong pieces, no clever prompt will save you. Test retrieval on its own with real questions from real users. Check if the right piece shows up in the top few results.'),
      h('3. Measure answers, do not guess'),
      p('Build a small set of test questions with known good answers. Run it every time you change something. This one habit catches more problems than anything else.'),
      h('4. Add guardrails'),
      ul([
        'Say "I do not know" when the documents do not have the answer.',
        'Show sources so people can check the answer themselves.',
        'Respect permissions, so people only see what they are allowed to see.',
        'Let a human take over when the question is sensitive.',
      ]),
      h('5. Watch it after launch'),
      p('Real users ask surprising things. Log the questions that fail, add the missing knowledge, and improve a little every week. A good assistant is never finished, it keeps getting better.'),
    ],
  },
  {
    slug: 'slos-without-the-theatre',
    title: 'SLOs without the theatre',
    excerpt: 'Error budgets your team will actually use to make decisions.',
    category: 'SREaaS',
    readTime: '5 min',
    art: 'slo',
    body: [
      p('An SLO, or service level objective, is a simple promise about how reliable your service should be. For example: "99.9 percent of requests should succeed." Easy to say. Surprisingly easy to turn into a pretty dashboard that nobody ever looks at.'),
      h('Start with what users feel'),
      p('Do not measure what is easy. Measure what hurts when it goes wrong. Can people log in? Does the checkout work? Is the page fast enough? Pick two or three of these and ignore the rest for now.'),
      h('Set a target you can live with'),
      p('A target of 100 percent sounds nice, but it is impossible and very expensive. Pick a number that matches what your users really need. Then the gap between that number and perfect becomes your error budget.'),
      h('Use the error budget to decide'),
      p('This is the part that makes SLOs useful. The error budget is the amount of failure you can afford. If you have plenty left, ship new features faster. If you have burned most of it, slow down and fix reliability first.'),
      ul([
        'Budget is healthy: release more often and try new things.',
        'Budget is low: pause risky changes and fix the weak spots.',
        'Budget is gone: reliability work comes before anything new.',
      ]),
      h('Keep it small'),
      p('A few honest SLOs that your team checks every week beat fifty that nobody trusts. Review them often, adjust them when your product changes, and make sure the people who own the service are the ones who can act on them.'),
    ],
  },
  {
    slug: 'cicd-that-stays-fast-as-you-grow',
    title: 'CI/CD that stays fast as you grow',
    excerpt: 'Pipeline patterns that scale from first commit to platform team.',
    category: 'DevOpsaaS',
    readTime: '7 min',
    art: 'cicd',
    body: [
      p('When a project is new, the pipeline runs in two minutes and everyone is happy. A year later it takes forty minutes, fails for no clear reason, and developers start to avoid it. This is very common, and it is fixable.'),
      h('Run the cheap checks first'),
      p('Put quick checks like formatting and unit tests at the start. If they fail, stop right away. There is no point spending ten minutes on a slow test when a simple typo already broke the build.'),
      h('Do things in parallel'),
      p('Tests that do not depend on each other can run at the same time. Splitting one long job into four short ones can turn a thirty minute wait into eight.'),
      h('Cache what does not change'),
      p('Downloading the same packages and rebuilding the same code on every run is wasteful. Cache dependencies and build results, and only redo the parts that really changed.'),
      h('Fix flaky tests quickly'),
      p('A test that fails randomly teaches people to ignore red builds. That is dangerous. When a test is flaky, either fix it or remove it, but never leave it to rot.'),
      ul([
        'Keep the main pipeline under ten minutes if you can.',
        'Make deployments boring: the same steps every time.',
        'Use one pipeline template for many services.',
        'Track how long the pipeline takes and treat slowness as a bug.',
      ]),
      p('A fast pipeline is not a luxury. It is what lets a small team ship safely many times a day, and it keeps working as the team gets bigger.'),
    ],
  },
  {
    slug: 'modernizing-legacy-software-safely',
    title: 'Modernizing legacy software, safely',
    excerpt: 'Strangler patterns and incremental delivery over risky rewrites.',
    category: 'Custom',
    readTime: '9 min',
    art: 'legacy',
    body: [
      p('Every company has that one old system. It is ugly, nobody fully understands it, and yet the whole business depends on it. The first instinct is usually, "Let us rewrite everything." That instinct is also where many projects go to die.'),
      h('Why big rewrites fail'),
      p('A full rewrite takes much longer than planned. Meanwhile the old system keeps changing, so the new one is always chasing it. Months pass, money is spent, and users still see nothing new.'),
      h('The safer way: the strangler approach'),
      p('Imagine a vine slowly growing around an old tree. You do the same with software. Pick one small piece of the old system, build it fresh, and send traffic to the new version. The old piece quietly stops being used. Then you pick the next piece.'),
      ul([
        'Start with a part that is painful but not too risky.',
        'Put a thin layer in front, so you can switch traffic between old and new.',
        'Move one piece at a time and check it works before moving on.',
        'Keep the old part running until you are sure you do not need it.',
      ]),
      h('Protect yourself with tests'),
      p('Before you change anything, write tests that describe how the old system behaves today, even the strange parts. These tests tell you quickly if the new version behaves differently.'),
      h('Deliver value early'),
      p('The best part of this method is that users get improvements along the way, not after two years. And if priorities change, you can stop at any point and still have a working system. That safety is worth more than a perfect plan.'),
    ],
  },
  {
    slug: 'cloud-cost-without-the-surprises',
    title: 'Cloud cost without the surprises',
    excerpt: 'Right sizing, visibility, and guardrails for predictable spend.',
    category: 'Cloud',
    readTime: '6 min',
    art: 'cloud',
    body: [
      p('Cloud bills have a way of growing quietly. One month it is fine, the next month it is double, and nobody can say why. The good news is that most of the waste comes from a few simple things.'),
      h('First, see where the money goes'),
      p('You cannot control what you cannot see. Tag every resource with the team and the project it belongs to. Then your bill stops being one big number and starts telling a story.'),
      h('Right size what you run'),
      p('Many servers are bigger than they need to be, because someone chose a large size to be safe and never looked again. Check real usage over a few weeks, and move to a smaller size where it is clearly too big.'),
      h('Turn off what nobody uses'),
      ul([
        'Test and staging environments that run all night and all weekend.',
        'Old disks and snapshots that belong to servers long gone.',
        'Forgotten experiments that someone started and never stopped.',
      ]),
      h('Commit when you are sure'),
      p('If you know you will need a certain amount of capacity for a year, cloud providers give a good discount for committing. Do this only for the steady part of your usage, not the unpredictable part.'),
      h('Add guardrails'),
      p('Set budgets and alerts so you hear about a spike in hours, not at the end of the month. A simple alert that says "spend is 30 percent above normal" can save a lot of money.'),
      p('Cost control is not a one time clean up. Look at it a little every month, and the surprises mostly disappear.'),
    ],
  },
  {
    slug: 'multi-tenant-saas-from-day-one',
    title: 'Designing multi tenant SaaS from day one',
    excerpt: 'Isolation, billing, and onboarding decisions that compound.',
    category: 'SaaS',
    readTime: '7 min',
    art: 'tenant',
    body: [
      p('A multi tenant SaaS product serves many customers from one system. Each customer is a tenant, and each one expects their data to feel private and their experience to feel personal. It is much easier to plan for this early than to fix it later.'),
      h('Decide how to keep data apart'),
      p('There are a few common ways. You can give each tenant their own database, share one database with a tenant column on every table, or mix both. Separate databases are simple to reason about and good for large customers. A shared database is cheaper and easier to run. Many products start shared and move big customers to their own space later.'),
      h('Never trust the code to remember'),
      p('The scariest bug in SaaS is one customer seeing another customer\u2019s data. Do not rely on every developer remembering to filter by tenant. Build it into the foundation, so a query without a tenant simply cannot run.'),
      h('Think about billing early'),
      ul([
        'Plans and limits: what does each plan include?',
        'Usage: do you charge per seat, per use, or both?',
        'Trials, upgrades, downgrades and failed payments.',
      ]),
      h('Make onboarding smooth'),
      p('The first ten minutes decide whether a new customer stays. Let them sign up, invite their team, and see value quickly. Behind the scenes, creating a new tenant should be automatic, not a manual task for your team.'),
      p('None of these choices are hard on their own. The trick is making them early, while changing your mind is still cheap.'),
    ],
  },
  {
    slug: 'custom-saas-platform-around-your-requirements',
    title: 'Building a custom SaaS platform around your customers\u2019 requirements',
    excerpt:
      'How to move from requirements to a launched, billable SaaS product without overbuilding.',
    category: 'SaaS',
    readTime: '8 min',
    art: 'customsaas',
    body: [
      p('Many great SaaS products start with one sentence: "My customers keep asking for this." Turning that sentence into a real product is a journey, and the biggest risk is building too much, too early.'),
      h('Start with the customer, not the features'),
      p('Write down who the customer is, what job they are trying to get done, and what hurts today. A good requirement sounds like, "A clinic manager needs to see tomorrow\u2019s bookings in one place." A weak one sounds like, "We need a dashboard."'),
      h('Pick the smallest useful version'),
      p('Ask yourself what the first version must do for someone to pay for it. Everything else can wait. A small product that solves one problem well is easier to sell than a big one that does ten things badly.'),
      h('Plan the business side too'),
      ul([
        'How will customers sign up and log in?',
        'What plans will you offer, and what will each include?',
        'How will you take payments and handle invoices?',
        'How will you support customers when something goes wrong?',
      ]),
      h('Build in small steps'),
      p('Work in short cycles, show real progress every couple of weeks, and listen to early users. Their feedback is worth more than any plan made in a meeting room.'),
      h('Launch, then keep improving'),
      p('A launch is the beginning, not the end. After launch you will fix things, add things, and learn what customers truly value. That is why it helps to have a team that can build the product and also keep running and improving it.'),
    ],
  },
  {
    slug: 'agentic-ai-platforms-from-demo-to-dependable',
    title: 'Agentic AI platforms: from demo to dependable',
    excerpt:
      'Tool use, planning, human in the loop controls and observability for AI agents in production.',
    category: 'AIaaS',
    readTime: '9 min',
    art: 'agentic',
    body: [
      p('A normal chatbot answers a question. An AI agent goes further. It can make a plan, use tools like your calendar, database or email, and finish a task with many steps. That power is exciting, and it is also why agents need extra care.'),
      h('What makes an agent different'),
      p('An agent has three basic parts: a goal, a set of tools it is allowed to use, and a loop where it thinks, acts, and checks the result. Each turn of the loop brings it closer to finishing, or tells it to try something else.'),
      h('Give it small, clear tools'),
      p('Instead of one giant tool that can do everything, give the agent several small ones with clear names and clear limits. "Look up an order" is better than "access the database". Small tools are easier to test and much safer.'),
      h('Keep a human in control'),
      ul([
        'Ask for approval before anything that cannot be undone, like sending money or deleting data.',
        'Set limits on how many steps or how much money an agent can use.',
        'Make it easy for a person to step in and take over.',
      ]),
      h('Make everything visible'),
      p('When an agent does something strange, you need to know why. Record every thought, tool call and result. This history is how you debug, how you improve, and how you earn the trust of the people using it.'),
      h('Test with real situations'),
      p('Build a set of real tasks and see how often the agent finishes them correctly. Run it before every change. Agents can behave differently from one run to the next, so you want evidence, not hope.'),
      p('Our engineers build agentic platforms with these habits from the start, so the demo and the real thing behave the same way.'),
    ],
  },
  {
    slug: 'adding-ai-to-an-existing-product-safely',
    title: 'Adding AI to an existing product, safely',
    excerpt:
      'Scoped data access, guardrails, evaluation and staged rollout when integrating AI into live products.',
    category: 'AIaaS',
    readTime: '8 min',
    art: 'safeai',
    body: [
      p('You already have a product, real users and real data. Now you want to add AI. The goal is simple: make the product better without putting anyone\u2019s data or trust at risk. Here is how we approach it.'),
      h('Start with one clear use case'),
      p('Do not sprinkle AI everywhere. Pick one place where it truly helps, such as summarizing long tickets, searching documents, or drafting replies. A focused feature is easier to test and easier for users to understand.'),
      h('Control what the AI can see'),
      p('Give the AI only the data it needs for the task, and only the data the current user is allowed to see. Never send everything "just in case". Think about what leaves your system, and check the privacy terms of any outside AI provider you use.'),
      h('Add guardrails around it'),
      ul([
        'Check inputs for things that should never be sent.',
        'Check outputs before showing them, especially for sensitive topics.',
        'Make it clear to users when they are reading AI generated content.',
        'Keep a simple way for users to report a bad answer.',
      ]),
      h('Test before you trust'),
      p('Create a set of real examples and see how the feature performs. Include the awkward cases, not only the easy ones. Repeat these tests whenever you change the model or the prompt.'),
      h('Roll out in steps'),
      p('Start with your own team, then a small group of customers, then everyone. Use a switch that lets you turn the feature off right away if something looks wrong.'),
      p('Done carefully, AI becomes just another reliable part of your product, not a risky experiment.'),
    ],
  },
  {
    slug: 'qa-as-a-service-test-automation',
    title: 'QA as a service: test automation that keeps pace with releases',
    excerpt:
      'Manual, automated and CI integrated testing, and when a prebuilt QA platform beats building your own.',
    category: 'QAaaS',
    readTime: '6 min',
    art: 'qa',
    body: [
      p('Every team wants to release faster. But every fast release carries the fear of breaking something. Good quality assurance is what turns that fear into confidence.'),
      h('Manual and automated testing both matter'),
      p('Automated tests are great for checking the same things again and again, like login, checkout and key workflows. Human testers are great at finding the strange problems no script would think of. A healthy team uses both.'),
      h('Test at the right level'),
      ul([
        'Many small, fast tests for single pieces of code.',
        'Some tests that check how parts work together, like your API.',
        'A few full journey tests that click through the real product.',
      ]),
      h('Put tests inside your pipeline'),
      p('A test that runs only when someone remembers is a test that gets skipped. Connect your tests to your pipeline, so every change is checked automatically and a broken build never reaches users.'),
      h('Build or buy your testing setup?'),
      p('Setting up test tools, reports and a place to manage test cases takes time before you test anything. A ready to use QA platform lets you start right away and focus on the tests that matter. Building your own makes sense only if you have very special needs.'),
      p('With QA as a service, you get experienced testers and a working setup without hiring and training a whole team first. Releases get calmer, and your developers spend less time chasing bugs.'),
    ],
  },
  {
    slug: 'when-to-hire-a-consultant-or-an-embedded-expert',
    title: 'When to hire a consultant or an embedded expert',
    excerpt:
      'Choosing between advisory work and adding a specialist to your team for AI, DevOps, SRE or QA.',
    category: 'Consulting',
    readTime: '5 min',
    art: 'consult',
    body: [
      p('Sometimes your team is strong, but a single skill is missing. Maybe nobody has built an AI agent before. Maybe your servers are growing and nobody knows how to keep them reliable. In moments like this you have two good options.'),
      h('Option one: a consultant'),
      p('A consultant gives advice and direction. They look at your situation, tell you what they see, and help you choose a plan. This works well when you need clarity, a second opinion, or a review before a big decision.'),
      ul([
        'You are choosing between technologies and want an honest opinion.',
        'You want someone to review your design before you build it.',
        'You need a clear plan, but your team will do the work.',
      ]),
      h('Option two: an embedded expert'),
      p('An embedded expert joins your team for a while and works alongside your people. They do real work, share their knowledge in daily conversations, and leave your team stronger. This suits situations where you need hands, not only advice.'),
      ul([
        'You have a deadline and not enough experienced people.',
        'You need a specialist for a few months, not a permanent hire.',
        'You want your team to learn a new skill by working next to someone who knows it.',
      ]),
      h('How to decide'),
      p('Ask yourself one question: do we need a plan, or do we need hands? If it is a plan, start with a consultant. If it is hands, bring in an expert. Many teams do both, starting with advice and then adding a specialist to carry it out.'),
      p('At Onevia Labs we offer both, across AI, QA, DevOps, SRE and cloud, so you can start small and grow the support as you need it.'),
    ],
  },
];

export const featuredPost = posts.find((post) => post.featured) ?? posts[0];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
