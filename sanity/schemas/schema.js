// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import pageInfo from './pageInfo'
import experience from './experience'
import skill from './skill'
import social from './social'
import project from './project'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    experience,
    skill,
    social,
    project
  ]),
})
