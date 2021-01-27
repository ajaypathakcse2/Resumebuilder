import React from 'react'

export default function testing(props){
    const{education ,
    educations ,
    skills ,
    personalInfo ,
    experience ,
    experiences, 
    project,
    projects,
    reference,
    references,
    socialMedium,
    socialMedia,}=props
    const { fname, lname, dob, email, address, contact } = personalInfo
    const { school, degree, marks, stream } = education
    const { company, designation, from, to } = experience
    const { title, description } = project
    const { site, link } = socialMedium
    const { referenceName, referenceInfo } = reference
    return(
        <div className='resume' style={{ display: 'flex', width: 595, height: 842, flexDirection: 'row', justifyContent: 'space-between', border: '1px solid gray' }}>
        <div className='leftPortion' style={{ flex: 0.4, display: 'flex', flexDirection: 'column', backgroundColor: '#222222', paddingLeft: 20, paddingTop: 10, color: 'white' }}>
            <div style={{ width: '100%' }}>
                <div style={{ margin: 'auto' }}><img style={{ width: '80%', border: '1px solid gray', borderRadius: '50%' }} src='/demo.jpg' /></div>
            </div>
            <div className='info' style={{ paddingBottom: 40 }}>
                <div style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'white' }}>INFO</div>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 10 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {/* <div style={{backgroundColor:'white',width:30,height:30}}><img style={{width:'100%'}}src='/name.png'/></div> */}
                        <div>Name</div>
                    </div>
                    <div style={{ color: 'wheat', fontSize: 13 }}>{`${fname} ${lname}`}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 10 }}>
                    <div>Address</div><div style={{ color: 'wheat', fontSize: 13 }}>{`${address}`}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 10 }}>
                    <div>Phone</div><div style={{ color: 'wheat', fontSize: 13 }}>{`${contact}`}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 10 }}>
                    <div>Email</div><div style={{ color: 'wheat', fontSize: 13 }}>{`${email}`}</div>
                </div>
            </div>
            {socialMedia.length ? <div className='social' style={{ width: '100%', paddingBottom: 40 }}>
                <div style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'white' }}>SOCIAL</div>
                <hr />
                {socialMedia.map((item, key) => {
                    return (
                        <div key={key} style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 10 }}>
                            <div>{item.site}</div><div style={{ color: 'wheat', fontSize: 13 }}>{item.link}</div>
                        </div>)
                })}
            </div> : null}
            {references.length ? <div className='reference' style={{ width: '100%', paddingBottom: 40 }}>
                <div style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'white' }}>REFERENCES</div>
                <hr />
                {references.map((item, key) => {
                    return (
                        <div key={key} style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 10 }}>
                            <div>{item.referenceName}</div><div style={{ color: 'wheat', fontSize: 13 }}>{item.referenceInfo}</div>
                        </div>)
                })}
            </div> : null}

        </div>
        <div className='rightPortion' style={{ display: 'flex', flexDirection: 'column', flex: 0.6, padding: 10 }}>
            <div style={{ paddingBottom: 40, paddingTop: 30, width: '100%' }}>
                <div style={{ fontSize: 30, fontWeight: 'bold' }}>{`${fname.toUpperCase()} ${lname.toUpperCase()}`}</div>
                <small>FULL STACK DEVELOPER</small>
            </div>
            <div className='workExperience' style={{ display: 'flex', flexDirection: 'column', paddingTop: 5 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: 30, height: 30, marginRight: 10, }}><img style={{ width: '100%', borderRadius: '50%', border: '1px solid black' }} src='/increase.png' /></div>
                    <div style={{ fontSize: 14, borderBottom: '1px solid black', flex: 1, paddingBottom: 10 }}>WORK EXPERIENCE</div>
                </div>
                {experiences.map((item, key) => {
                    return (
                        <div key={key} style={{ display: 'flex', flexDirection: 'row', paddingTop: 10, width: '100%', alignItems: 'flex-start' }}>
                            <div style={{ fontSize: 14, paddingLeft: 30, paddingRight: 20, width: 150 }}>{`${item.from.split('-')[0]}-${item.to.split('-')[0]}`}</div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: 14, }} className="company">{item.company}</div>
                                <div className="jobDescription" style={{ fontSize: 12 }}>Your Job description Goes Here</div>
                            </div>
                        </div>)
                })}
            </div>
            <div className='education' style={{ display: 'flex', flexDirection: 'column', paddingTop: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: 30, height: 30, marginRight: 10, }}><img style={{ width: '100%', borderRadius: '50%', border: '1px solid black' }} src='/education.png' /></div>
                    <div style={{ fontSize: 14, borderBottom: '1px solid black', flex: 1, paddingBottom: 10 }}>EDUCATION</div>
                </div>
                {educations.map((item, key) => {
                    return (
                        <div key={key} style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, width: '100%', alignItems: 'flex-start' }}>
                            <div style={{ fontSize: 14, paddingLeft: 30, paddingRight: 30, width: 200 }}>{`${item.degree}(${item.marks}%)`}</div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: 14, }} className="company">{item.school}</div>
                                <div className="jobDescription" style={{ fontSize: 12 }}>{item.stream}</div>
                            </div>
                        </div>)
                })}
            </div>
            <div className='skills' style={{ display: 'flex', flexDirection: 'column', paddingTop: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: 30, height: 30, marginRight: 10, }}><img style={{ width: '100%', borderRadius: '50%', border: '1px solid black' }} src='/logical-thinking.png' /></div>
                    <div style={{ fontSize: 14, borderBottom: '1px solid black', paddingBottom: 10, flex: 1 }}>SKILLS AND EXPERTISE</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingTop: 20, width: '100%' }}>

                    {skills.split(',').map((item, key) => {
                        return (
                            <div key={key} style={{ fontSize: 14, paddingLeft: 30 }}>{item}</div>
                        )
                    })}
                </div>
            </div>
            <div className='projects' style={{ display: 'flex', flexDirection: 'column', paddingTop: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: 30, height: 30, marginRight: 10, }}><img style={{ width: '100%', borderRadius: '50%', border: '1px solid black' }} src='/briefing.png' /></div>
                    <div style={{ fontSize: 14, borderBottom: '1px solid black', paddingBottom: 10, flex: 1 }}>PROJECTS</div>
                </div>
                {projects.map((item, key) => {
                    return (
                        <div key={key} style={{ display: 'flex', flexDirection: 'row', paddingTop: 10, width: '100%', alignItems: 'flex-start' }}>
                            <div style={{ fontSize: 14, paddingLeft: 30, paddingRight: 30, width: 200 }}>{item.title}</div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: 14, }} className="project">{item.description}</div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    </div> 
    )
}