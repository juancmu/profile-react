import { useProjectStyle } from '../src/hooks/useProjectStyle'
import { useLang } from '../src/App'

import experienceEs from '../src/i18n/experience-job-es.json'
import experienceEn from '../src/i18n/experience-job-en.json'

export default function Project01() {
    const { lang } = useLang()
    const heroStyle = useProjectStyle()

    const contentHtml = lang === 'es' ? experienceEs["01"] : experienceEn["01"]

    return (
        <div style={heroStyle}>
            <div className="container">
                <h1>{lang === 'es' ? 'Funciones Principales' : 'Main Functions'}</h1>
                <div 
                    className='contentProject' 
                    style={{ color: 'black', lineHeight: '1.8', marginBottom: '40px' }}
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
                <div className="mapLocation" style={{ width: '100%', height: '75vh', marginTop: '20px' }}>
                    <iframe
                        src="/mapCFRO.html"
                        title="Map CFRO"
                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
