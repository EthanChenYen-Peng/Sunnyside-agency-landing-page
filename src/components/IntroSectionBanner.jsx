import styled from 'styled-components/macro'
import { sizes } from '../constants'

function Image({ mobileSrc, desktopSrc }) {
  return (
    <ImageContainer>
      <picture>
        <source media={`(min-width:${sizes.sm})`} srcSet={desktopSrc} />
        <img src={mobileSrc} />
      </picture>
    </ImageContainer>
  )
}

function ContentSection({ title, content, accentColor }) {
  return (
    <ContentContainer>
      <InnerContainer>
        <ContentHeader>{title}</ContentHeader>
        <Content>{content}</Content>
        <LearnMoreBtn accentColor={accentColor}> Learn More </LearnMoreBtn>
      </InnerContainer>
    </ContentContainer>
  )
}

const content = {
  transform: {
    title: 'Transform your brand',
    content: `
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do
          most of the marketing for you.
      `,
    mobileImg: '../../images/mobile/image-transform.jpg',
    desktopImg: '../../images/desktop/image-transform.jpg',
  },
  standout: {
    title: 'Stand out to the right audience',
    content: `
  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
      `,
    mobileImg: '../../images/mobile/image-stand-out.jpg',
    desktopImg: '../../images/desktop/image-stand-out.jpg',
    accentColor: 'var(--soft-red)',
  },
}
export default function IntroSectionBanner() {
  return (
    <>
      <Container>
        <ContentSection
          title={content.transform.title}
          content={content.transform.content}
        />
        <Image
          mobileSrc={content.transform.mobileImg}
          desktopSrc={content.transform.desktopImg}
        />
      </Container>
      <Container reverse={true}>
        <ContentSection
          title={content.standout.title}
          content={content.standout.content}
          accentColor={content.standout.accentColor}
        />
        <Image
          mobileSrc={content.standout.mobileImg}
          desktopSrc={content.standout.desktopImg}
        />
      </Container>
    </>
  )
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  gap: 2rem;
  text-align: center;
  height: 100%;
  min-height: 400px;

  @media (min-width: ${sizes.sm}) {
    text-align: start;
    align-items: start;
    width: clamp(400px, 60%, 700px);
    margin: 0 auto;
  }
`
const ImageContainer = styled.div`
  flex: 1;
  background-color: red;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    // Remove unwanted vertical space as images are treated as text.
    display: block;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${sizes.sm}) {
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  }
`

const ContentContainer = styled.div`
  flex: 1;
`

const ContentHeader = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  font-family: 'Fraunces';
`

const Content = styled.p`
  color: var(--dark-grayish-blue);
  font-size: 1.1rem;
  line-height: 1.3;
`

const LearnMoreBtn = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Fraunces';
  position: relative;
  text-transform: uppercase;
  &::before {
    content: '';
    height: 8px;
    width: 100%;
    background-color: ${(props) => props.accentColor || 'var(--yellow)'};
    position: absolute;
    bottom: 0;
    transform: translateY(-30%);
    z-index: -1;
    border-radius: 5px;
  }
`
