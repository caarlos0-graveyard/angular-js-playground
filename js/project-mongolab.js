angular.module('project-mongolab', ['ngResource']).
  factory('Project', function($resource) {
    var Project = $resource('https://api.mongolab.com/api/1/databases' +
      '/angularprojectstest/collections/projects/:id',
      { apiKey: '5089619fe4b0d0aee183c454' }, {
        update: { method: 'PUT' }
      }
    );

    Project.prototype.update = function(cb) {
      return Project.update({ id: this._id.$oid },
        angular.extend({}, this, { _id: undefined }), cb);
    };

    Project.prototype.destroy = function(cb) {
      return Project.remove({ id: this._id.$oid }, cb);
    };

    return Project;
  });
