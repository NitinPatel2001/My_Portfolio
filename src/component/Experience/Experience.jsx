import * as React from 'react'
import './Experience.css'

const arr = [
    {
        Active: 'Samsung R&D Institute Bangalore',
        companyName: 'Samsung R&D Institute Bangalore',
        Date: 'June 2023 - July 2023',
        Location: 'Bangalore',
        Content: [
            'Collaborated with the Samsung AdTech Development Team to develop high-performance micro-services utilizing the power of GRPC in C language for seamless retrieval of 10000+ addresses from the robust NoSQL Aerospike database.',
            'Designed 3 high-impact Remote Procedure calls featuring both unary and streaming functions as a library within the Dockerized microservices for seamless integration with mission-critical organizational services.',
            'Worked primarily with GRPC - 1.17.2 | Docker | AerospikeDB | Proto Buffer - 3.6.1.3 | C language | C++ language.'
        ]
    },
    {
        Active: 'GeeksForGeeks',
        companyName: 'GeeksForGeeks',
        Date: 'April 2023 - Oct 2023',
        Location: 'REMOTE',
        Content: [
            'Authored 4+ articles on various topics related to Data Structures and Algorithms, Programming fundamentals, and Web Technologies.',
            'Technical Skill Used: Data Structure and Algorithm | C++ | HTML | CSS',
        ]
    },
    {
        Active: 'Desh Ke Mentor',
        companyName: 'Desh Ke Mentor',
        Date: '',
        Location: 'Remote',
        Content: [
            'The government initiated a programme to raise awareness about future opportunities among government school students',
            'Mentored government school students to help them discover their passions, careers, and future opportunities',
        ]
    }
]


class Experience extends React.Component {

    constructor() {
        super();
        this.state = {
            Active: 'Samsung R&D Institute Bangalore',
            companyName: 'Samsung R&D Institute Bangalore',
            Date: 'June 2023 - July 2023',
            Location: 'Bangalore',
            Content: [
                'Collaborated with the Samsung AdTech Development Team to develop high-performance micro-services utilizing the power of GRPC in C language for seamless retrieval of 10000+ addresses from the robust NoSQL Aerospike database.',
                'Designed 3 high-impact Remote Procedure calls featuring both unary and streaming functions as a library within the Dockerized microservices for seamless integration with mission-critical organizational services.',
                'Worked primarily with GRPC - 1.17.2 | Docker | AerospikeDB | Proto Buffer - 3.6.1.3 | C language | C++ language.'
            ]
        }
    }

    HandleClick = (e) => {
        this.setState(() => {
            return arr[e.target.id]
        })
    }

    render() {
        console.log('reder: ',this.state.Active)
        return (
            <section className='Experience'>
                <div className='ExpContent'>
                    <h4>Experience</h4>
                    <div className='Companies'>
                        <div className='ListOfCompanies'>
                            <div className='company' id='0' onClick={this.HandleClick} style={{backgroundColor: this.state.Active === 'Samsung R&D Institute Bangalore'? '#1F1E1E': 'transparent'}}>Samsung</div>
                            <div className='company' id='1' onClick={this.HandleClick} style={{backgroundColor: this.state.Active === 'GeeksForGeeks'? '#1F1E1E': 'transparent'}}>GeeksForGeeks</div>
                            {/* <div className='company' id='2' onClick={this.HandleClick} style={{backgroundColor: this.state.Active === 'Chegg'? '#1F1E1E': 'transparent'}}>Chegg</div> */}
                            <div className='company' id='2' onClick={this.HandleClick} style={{backgroundColor: this.state.Active === 'Desh Ke Mentor'? '#1F1E1E': 'transparent'}}>Desh Ke Mentor</div>
                        </div>
                        <div className='DescriptionCompany'>
                            <div className='NameDate'>
                                <span>{this.state.companyName}</span>
                                <span className='Dates'>{this.state.Date}</span>
                            </div>
                            <div className='Location'>
                                {this.state.Location}
                            </div>
                            <ul class Name='AboutWork'>
                                {this.state.Content.map((doc)=> {
                                    return <li>{doc}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience