module Redisaux

	module Aux
	  
	  def self.checkKey(key)
	      redis = Redis.current
	      if redis.nil?
	      	return nil
	      end
      	  redis_val = redis.get(key)
      	  if !redis_val.nil? && redis_val.to_s.length > 0 && redis_val.to_s != "null"
          	redis_val
          else
          	nil
          end
	  end

 	def self.set(key, value)
	    redis = Redis.current
	     if redis.nil?
	      return nil
	     end
        redis.set key, value.to_json
	 end


	end
end
