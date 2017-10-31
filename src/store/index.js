import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    resumeData: {
      profile: {
        name: '',
        age: '',
        gender: '',
        birthday: ''
      },
      awards: [
        {name: ''}
      ],
      workExperiences: [
        {company: '', content: ''}
      ],
      studyExperiences: [
        {school: '', duration: '', degree: ''}
      ],
      projects: [
        {name: '', technology: '', content: ''}
      ],
      contacts: {
        mobile: '',
        qq: '',
        email: '',
        github: ''
      },
    }

  },
  mutations: {
    updateResume(state,{field,subfield,value}){
      state.resumeData[field][subfield] = value
    }
  }
})

