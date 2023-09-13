interface Props {
  children: React.ReactNode;
}

const Article = ({ children, ...props }: Props) => {
  return <article {...props}>{children}</article>
}

const Title = ({ children, ...props }: Props) => {
  return <h2 {...props}>{children}</h2>
}

const Main = ({ children, ...props }: Props) => {
  return <p {...props}>{children}</p>
}

const Footer = ({ children, ...props }: Props) => {
  return <footer {...props}>{children}</footer>
}

const Item = ({ children, ...props }: Props) => <p {...props}>{children}</p>

Article.title = Title;
Article.main = Main;
Article.footer = Footer;
Article.item = Item;

export const Ui = () => {
  return (
    <>
      <Article>
        <Article.title>title article</Article.title>
        <Article.main>Content article</Article.main>
        <Article.item>Item 1</Article.item>
        <Article.item>Item 2</Article.item>
        <Article.footer>Footer</Article.footer>
      </Article>
    </>
  )
}