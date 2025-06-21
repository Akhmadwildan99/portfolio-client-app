import { useParams, Link } from 'react-router-dom';
import articles from '../data-articles.js';

function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-teal-500 hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-teal-500 hover:underline mb-8">
          <i className="ri-arrow-left-line mr-2"></i>
          Back to Home
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-6">
              <time dateTime={article.date} className="text-sm">
                {article.date}
              </time>
              <span className="mx-2">•</span>
              <span className="text-sm">Akhmad Wildan</span>
            </div>
            <div className="h-px bg-gray-200 mb-8"></div>
          </header>
          
          <div className="text-gray-700 leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```\w*\n?/, '').replace(/```$/, '');
                return (
                  <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                    <code className="text-sm text-gray-800">{codeContent}</code>
                  </pre>
                );
              }
              
              if (paragraph.includes('`') && !paragraph.startsWith('```')) {
                const parts = paragraph.split('`');
                return (
                  <p key={index} className="mb-4 text-base leading-7">
                    {parts.map((part, i) => 
                      i % 2 === 0 ? part : <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm">{part}</code>
                    )}
                  </p>
                );
              }
              
              return (
                <p key={index} className="mb-4 text-base leading-7">
                  {paragraph}
                </p>
              );
            })}
          </div>
          
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Originally published on{' '}
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
                  Medium
                </a>
              </div>
              <Link to="/" className="text-teal-500 hover:underline text-sm">
                ← Back to Home
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}

export default ArticleDetail;