import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';
import landing3 from "../../assets/landing3.jpg"
import { transitions } from 'polished'

let slideIn = keyframes`
    from {
        transform: translateY(1080px);
        visibility: visible;
    }
    to {
        transform: translateY(0);
    }
`

let slideOut = keyframes`
    from {
        transform: translateY(0px);
        visibility: visible;
    }
    to {
        transform: translateY(-100vh);
    }
`

const StudioContainer = styled.div`
    margin: 0;
    padding: 0;
    transition: .4s;
`


const LandingContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(10vw, 25vw) 10vw minmax(20vw, 40vw) 1fr;
    grid-template-rows: 1fr minmax(25rem, 20rem) 1fr;
    height: 100vh;
    width: 100vw;
    margin: 0;
    top: 0;
    background: black;
    color: white;
`
 
const Logo = styled.div`
    grid-column: 1;
    grid-row: 2;
    position: relative;
    font-family: codelight;
    font-size: 5vw;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`
 
const Headline = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    grid-column: 3;
    grid-row: 2;
    line-height: .95em;
    font-size: 9vw;
    font-family: rzregular;
`

class Landing extends Component{
    render(){
        return (
            <LandingContainer>
                <Logo>
                    <h1>S<sup>3</sup></h1>
                </Logo>
                <Headline>
                    Studio <br></br> & vision
                </Headline>
            </LandingContainer>
        )
    }
}


const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const AboutImg = styled.div`
        position: relative;
        top: -20vh;
        img{
            width: 35vw;
        }
`
 
const AboutText = styled.div`
        position: relative;
        width: 20em;
        padding: 8rem 10rem;
        p{  
            font-family: quicksandmedium;
            font-size: 2em;
            width: 100%;
            text-align: center;
        }
`

class About extends Component{
    render(){
        return(
            <AboutContainer>
                <AboutImg>
                    <img src={landing3}></img>
                </AboutImg>
                <AboutText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, 
                        quibusdam provident quos inventore, et 
                    </p>
                </AboutText>
            </AboutContainer>
        )
    }
}

const SkillsPassionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    div{
        padding: 0em 3rem;
        font-family: quicksandmedium;
        width: 18rem;
        li{
            line-height: 1.2em;
            font-size: 1.9em;
            list-style-type: none;
        }
        p{
            font-family: quicksandmedium;
            line-height: 1.4em;
            font-size: 1.1em;
            margin: 0;
        }
    }
`

const Title = styled.div`
    font-size: .9rem;
    padding-bottom: .4rem;
    font-family: monospace;
    margin: .5em 0em;
`

class SkillPassion extends Component{
    render(){
        return (
            <SkillsPassionContainer>
                <div>
                    <Title>Skills</Title>
                    <li>Strategy</li>
                    <li>Brand Identities</li>
                    <li>Print Design</li>
                    <li>UI/UX Design</li>
                    <li>Art Direction</li>
                    <li>Back End</li>
                    <li>Admin System</li>
                    <li>Front End</li>
                </div>
                <div>
                    <Title>Passion</Title>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam id eaque deserunt. Expedita ab dolore vel hic porro aut rerum voluptate quo qui iusto animi, facilis sit doloremque adipisci?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis facere nostrum voluptates, blanditiis ut nemo iure ipsam neque cupiditate, voluptatibus repudiandae tenetur sunt officiis maiores excepturi cum at mollitia?
                    </p>
                </div>
            </SkillsPassionContainer>
        )
    }
}


const SpecialTextContainer = styled.div`
    margin-top: 8em;
    position: relative;
    display: flex;
    flex-direction: row;   
`

const SpecialImg = styled.div`
    position: relative;
    left: ${props => (props.left || 45) + 'vw'};
    transition: .5s;
    transition-delay: .3s;
    transition-timing-function: cubic-bezier(.55,.94,.59,.49);
    img{
        top: 50%;
        z-index: 5;
        transform: translateX(-50%) translateY(-50%);
        max-width: 30rem;
        position: absolute;
    }
`
    
const SpecialText = styled.div`
        cursor: none;
        width: 65vw;
        line-height: 1em;
        position: relative;
        color: #202020;
        font-family: rzregular;
        font-size: 9rem;
        left: ${props => (props.left || 50) + 'vw'};
        opacity: ${props => (props.opacity || .3)};
        transition: .5s;
        transition-timing-function: cubic-bezier(.55,.94,.59,.49);
        ${'' /* left: 32vw !important;
        opacity: 1 !important; */}
`

const Cursor = styled.div`
    opacity: 1 !important;
    position: absolute;
    height: 0rem;
    width: 0rem;
    border-radius: 50%;
    background: ${props => props.background || 'black'};
    transform-origin: center;
    mix-blend-mode: ${props => props.blendmode || 'none'};
    z-index: 10;
    transform: translate(0px, 0px);
    transition: transform .1s;
    transition: padding .2s;
    padding: ${props => (props.padding || 0) + 'rem'}
    ${'' /* .cursor-onview{
        padding: 2.5rem;
    } */}
`


function addCustomCursor(el, cursor, paddingOnView, baseElem = null){
    //assuming cursor is defined inside the markup of the main element
    //assuming there is a transform property defined for the cursor element
    setTimeout(function(){
        if(baseElem == null){baseElem = el                                             }
        console.log(baseElem);
        let elPosY;
        (baseElem != el) ? elPosY = baseElem.offsetTop + el.offsetTop : elPosY = baseElem.offsetTop;
        
        let previousDIff = elPosY - window.scrollY;
        function setCursorPositionAfterScroll(){
            let transforms = cursor.style.transform.split(',');
            let currentY = parseInt(transforms[1])
            console.log(elPosY)
            let deltaDiff = previousDIff - (elPosY - window.scrollY);
            previousDIff = elPosY - window.scrollY;
            transforms[1] = (currentY + deltaDiff) + 'px)';
            cursor.style.transform = transforms[0] + ',' + transforms[1];
        }

        el.addEventListener('mouseenter', function(){
            setCursorPositionAfterScroll();
            //cursor.classList.add(cursorClassNameOnView);
            cursor.style.padding = paddingOnView;
        })
        el.addEventListener('mouseleave', function(){
            //cursor.classList.remove(cursorClassNameOnView);
            cursor.style.padding = "0rem";
        })
        el.addEventListener('mousemove', function(e){
            cursor.style.transform = "translate(" + (e.clientX - el.getBoundingClientRect().x) + 'px,' + (e.clientY - el.getBoundingClientRect().y) + 'px)';
        })

        
        document.addEventListener('scroll', function(e){
            if(window.scrollY >= (elPosY - el.clientHeight) && window.scrollY <= (elPosY + el.clientHeight)){
                setCursorPositionAfterScroll();
            }
        })
    }, 100) 
}

class SpecialTextClass extends Component{
    constructor(){
        super();
        const baseStyles = {

        }
        this.specialTextContainer = React.createRef();
        this.specialText = React.createRef();
        this.specialTextCursor = React.createRef();
        this.state = {
            'x': 30
        }
    }
    componentDidMount(){
        addCustomCursor(this.specialText.current, this.specialTextCursor.current, "2.5rem", this.specialTextContainer.current)
    }
    render(){

        return (
            <SpecialTextContainer ref={this.specialTextContainer}>
                <SpecialImg left={this.state.x}>    
                    <img src={landing3}></img>
                </SpecialImg>
                <SpecialText ref={this.specialText}>
                    <Cursor ref={this.specialTextCursor}></Cursor>
                    <p>At the heart of our work, the constant search for the juncture between aesthetics and technical performances.</p>
                </SpecialText>
            </SpecialTextContainer>
        )
    }
} 


const PostSpecialText = styled.div`
    position: relative;
    left: 50vw;
    padding: 8em 1rem;
    width: 18rem;
    font-family: quicksandmedium;
    line-height: 1.4em;
    font-size: 1.1em;
    margin: 0;
`

class PostSpecialTextClass extends Component{
    render(){
        return (
            <div>
                <PostSpecialText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam id eaque deserunt. Expedita ab dolore vel hic porro aut rerum voluptate quo qui iusto animi, facilis sit doloremque adipisci?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis facere nostrum voluptates, blanditiis ut nemo iure ipsam neque cupiditate, voluptatibus repudiandae tenetur sunt officiis maiores excepturi cum at mollitia?
                </PostSpecialText>
            </div>
        )
    }
}

const OriginContainer = styled.div`
    cursor: none;
    position: relative;
    background: #111111;
    color: #EEEEEE;
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
`

const Origin = styled.div`
    align-self: center;
    margin-left: 20%;
    font-family: quicksandmedium;
    width: 21rem;
    p{
        font-family: rzregular;
        font-size: 2rem;
        margin: 0;
    }
`
const OriginTitle = styled.div`
    font-size: 1rem;
    padding-bottom: .9rem;
    font-family: monospace;
    margin: .5em 0em;
`

class OriginClass extends Component{
    constructor(){
        super()
        this.originContainer = React.createRef();
        this.originCursor = React.createRef();
    }
    componentDidMount(){
        addCustomCursor(this.originContainer.current, this.originCursor.current, "2.5rem")
    }
    render(){
        return (
            <OriginContainer ref={this.originContainer}>
                <Cursor ref={this.originCursor} background='white' blendmode='difference'></Cursor>
                <Origin>
                    <OriginTitle>Origin</OriginTitle>
                    <p>Rezo Zero is an anagram with reference to the binary language. Zero serves as a starting point, the basic element of digital; a circle in perpetual movement that invites creative exploration.
                    </p>
                </Origin>
            </OriginContainer>
        )
    }
}

const TeamContainer = styled.div`
    padding: 7rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title{
        font-size: 1.2em;
        padding: 2rem 1rem;
        width: 50rem;
        align-self: center;
        font-family: monospace;
    }
    .team-members{
        width: 50rem;
        align-self: center;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`
const TeamMember = styled.div`
    font-size: 1rem;
    min-width: 20rem;
    padding-bottom: 3rem;
    font-family: quicksandmedium;
    .name{
        font-family: quicksandmedium;
        font-size: 2rem;
    }
`
class TeamMemberClass extends Component{
    render(){
        return (
            <TeamMember>
                <div class="name">{this.props.name}</div>
                <div class="designation">{this.props.designation}</div>
            </TeamMember>
        )
    }
}

const teamMembers = {
    'Julias caeser': {
        'designation': 'military general0'
    },
    'Julias caeser2': {
        'designation': 'military general0'
    },
    'Julias caeser3': {
        'designation': 'military general0'
    },
    'Julias caeser4': {
        'designation': 'military general0'
    },
    'Julias caeser5': {
        'designation': 'military general0'
    },
}

class Team extends Component{
    render(){
        return (
            <TeamContainer>
                <div class="title">Core team</div>
                <div class="team-members">
                    {Object.keys(teamMembers)
                        .map(name => {
                            return <TeamMemberClass name={name} designation={teamMembers[name].designation}></TeamMemberClass>
                        })
                    }
                </div>
            </TeamContainer>
        )
    }
}

class Studio extends Component{
    componentDidMount(){
        
    }
    render(){
        return (
            <StudioContainer>
                <Landing></Landing>
                <About></About>
                <SkillPassion></SkillPassion>
                <SpecialTextClass></SpecialTextClass>
                <PostSpecialTextClass></PostSpecialTextClass>
                <OriginClass></OriginClass>
                <Team></Team>
            </StudioContainer>
        )
    }
}

export default Studio