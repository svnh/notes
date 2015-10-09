### Resources
- [martinfowler - plugin](http://martinfowler.com/eaaCatalog/plugin.html)
- [martinfowler - injection](http://www.martinfowler.com/articles/injection.html)

### Notes

Separated Interface is often used when application code runs in multiple runtime environments, each requiring different implementations of particular behavior.

Example: "execute unit tests against in-memory database without transaction control" or "execute in production mode against DB2 database with full transaction control" - requires editing conditional statements in a number of factories, rebuilding, and redeploying. Configuration shouldn't be scattered throughout your application, nor should it require a rebuild or redeployment. Plugin solves both problems by providing centralized, runtime configuration

Smaller factory to abstract interfaces of entities
- Many entities need some set of data to function
- Create a single 'plugin' interface which passes data to entities
