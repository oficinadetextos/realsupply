// import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import { graphql } from 'gatsby'
import {
	FaWhatsapp,
	FaShip,
	FaShippingFast,
	FaHospitalSymbol,
	FaTools,
} from 'react-icons/fa'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '@Layout'

const IndexPage = ({ data }) => {
	function changeBackground(e) {
		e.target.style.background = 'red'
	}
	return (
		<Layout type="BODY" opt={{ titleSeo: 'Inicial' }}>
			<Layout type="HEADER" logo={data.realLogo} />
			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: false,
					classes: 'wrapper-overflow hero-cta',
					alignTo: 'center',
					bgImg: {
						datas: data.heroImg,
						alignTo: 'center',
					},
				}}
			>
				<h2 className="cta-heading">
					Lorem ipsum sapi entei "
					<span className="cta-heading__italic">apsuum</span>" sa piente
				</h2>
				<a href="http://google.com" className="cta-link">
					Produtos
				</a>
				<a href="http://google.com" className="cta-link dark">
					Ligar Aqui
					<FaWhatsapp className="FaWhatsapp" />
				</a>
			</Layout>

			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: 'wrapper-overflow',
					alignTo: 'center',
				}}
			>
				<div className="fisrt-row">
					<h3 className="fisrt-title desktop-only">Conheça</h3>
					<div className="box-content">
						<h3 className="main-title">Titulo dois</h3>
						<p className="commom-paragraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							nihil provident sapiente ex, iusto, laborum sint hic voluptatem
							magni debitis doloribus, consequuntur reiciendis veritatis ipsum!
							Id pariatur voluptates voluptatum cumque.{' '}
						</p>
						<div className="inside-highlights">
							<h2 className="inside-title">Aqui título</h2>
							{/* <FaToolbox className="FaToolbox icon-main-menu-left" /> */}
							<FaShip className="FaHighlighIcon" />
							<div className="bg-inside-highlight">
								<StaticImage
									src="../../static/assets/images/hero-img.jpg"
									alt="Real Supply"
									// width={284}
									// height={60}
									className="bg-inside-img"
									style={{ objectFit: 'cover', width: '100%' }}
								/>
							</div>
							<div className="marquee">
								<p className="marquee-p">
									Produto I Produto Outro Mais um Produto aqui Produto I Produto
									Outro Mais um Produto aqui
								</p>
							</div>
						</div>
						<div className="inside-highlights">
							<h2 className="inside-title">Aqui título</h2>
							<FaShippingFast className="FaHighlighIcon" />
							<div className="bg-inside-highlight">
								<StaticImage
									src="../../static/assets/images/hero-img.jpg"
									alt="Real Supply"
									// width={284}
									// height={60}
									className="bg-inside-img"
									style={{ objectFit: 'cover', width: '100%' }}
								/>
							</div>
							<div className="marquee">
								<p className="marquee-p">
									Produto I Produto Outro Mais um Produto aqui Produto I Produto
									Outro Mais um Produto aqui
								</p>
							</div>
						</div>
						<div className="inside-highlights">
							<FaHospitalSymbol className="FaHighlighIcon" />
							<h2 className="inside-title">Aqui título</h2>
							<div className="bg-inside-highlight">
								<StaticImage
									src="../../static/assets/images/hero-img.jpg"
									alt="Real Supply"
									// width={284}
									// height={60}
									className="bg-inside-img"
									style={{ objectFit: 'cover', width: '100%' }}
								/>
							</div>
							<div className="marquee">
								<p className="marquee-p">
									Produto I Produto Outro Mais um Produto aqui Produto I Produto
									Outro Mais um Produto aqui
								</p>
							</div>
						</div>
						<div className="inside-highlights">
							<FaTools className="FaHighlighIcon" />
							<h2 className="inside-title">Aqui título</h2>
							<div className="bg-inside-highlight">
								<StaticImage
									src="../../static/assets/images/hero-img.jpg"
									alt="Real Supply"
									// width={284}
									// height={60}
									className="bg-inside-img"
									style={{ objectFit: 'cover', width: '100%' }}
								/>
							</div>
							<div className="marquee">
								<p className="marquee-p">
									Produto I Produto Outro Mais um Produto aqui Produto I Produto
									Outro Mais um Produto aqui
								</p>
							</div>
						</div>
					</div>
				</div>
			</Layout>
			<Layout
				type="ROW"
				opt={{
					bgColor: '#01071d',
					isBoxed: false,
					classes: 'wrapper-overflow',
					alignTo: 'center',
				}}
			>
				<div className="second-row">
					<div className="scene-main">
						<h2 className="">SS</h2>
						<p>loremmm</p>
						<div className="scene-img">
							<StaticImage
								src="../../static/assets/images/hero-img.jpg"
								alt="Real Supply"
								// width={284}
								// height={60}
								className="bg-inside-img"
								style={{ objectFit: 'cover', width: '100%' }}
							/>
						</div>
					</div>
				</div>
			</Layout>
			<Layout type="FOOTER" />
		</Layout>
	)
}

export const queryBg = graphql`
	query heroBg {
		heroImg: file(name: { eq: "hero-img" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
		realLogo: file(name: { eq: "real-supply-svg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`

export default IndexPage
